import React, { useState, useEffect } from 'react';
import { Incident } from '../../entites/incidentsEntities';
import './IncidentList.css';
import { app } from "../../services/FirebaseStorage"; // Assuming you have your Firebase config here
import { getDatabase, ref, get } from "firebase/database";
import { User } from '../../entites/incidentsEntities';

interface IncidentItemProps {
    incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => (
    <div className="incident-item">
        <div className="incident-id">INC{incident.id}</div>
        <div className="incident-title">{incident.title}</div>
        <div className="incident-path">{incident.path}</div>
        <div className="incident-assigned">{incident.assignedUser}</div>
        <div className="incident-date">{incident.fecha}</div>
        <div className="incident-action">
            {incident.status ? (
                <button className="close-incident-button">Cerrar incidente</button>
            ) : (
                <span className="incident-closed">Incidente cerrado</span>
            )}
        </div>
    </div>
);

const IncidentList: React.FC = () => {
    const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newIncidentTitle, setNewIncidentTitle] = useState('');
    const [newIncidentPath, setNewIncidentPath] = useState('');
    const [assignedUser, setAssignedUser] = useState('');
    const [availableUsers, setAvailableUsers] = useState<User[]>([]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setNewIncidentTitle('');
        setNewIncidentPath('');
        setAssignedUser('');
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        switch (name) {
            case 'title':
                setNewIncidentTitle(value);
                break;
            case 'path':
                setNewIncidentPath(value);
                break;
            case 'assignedUser':
                setAssignedUser(value);
                break;
            default:
                break;
        }
    };

    const handleAddIncident = async () => {
        if (newIncidentTitle && newIncidentPath && assignedUser) {
            const newIncident: Incident = {
                id: incidents.length + 1,
                fecha: new Date().toLocaleString('es-ES'),
                assignedUser: assignedUser,
                title: newIncidentTitle,
                path: newIncidentPath,
                status: true,
            };
            setIncidents([...incidents, newIncident]);
            closeModal();

            
            console.log('Nuevo Incidente agregado:', newIncident);
        } else {
            alert('Por favor, completa todos los campos.');
        }
    };

    useEffect(() => {
        const fetchNonAdminUsers = async () => {
            const database = getDatabase(app);
            const usersRef = ref(database, 'users');

            try {
                const snapshot = await get(usersRef);
                if (snapshot.exists()) {
                    const usersData = snapshot.val();
                    const usersArray: User[] = [];
                    for (const uid in usersData) {
                        if (Object.prototype.hasOwnProperty.call(usersData, uid) && !usersData[uid].roles?.admin) {
                            usersArray.push({ uid, ...usersData[uid] });
                        }
                    }
                    setAvailableUsers(usersArray);
                } else {
                    console.log('No users data available');
                    setAvailableUsers([]);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
                setAvailableUsers([]);
            }
        };

        fetchNonAdminUsers();
    }, []);

    return (
        <div className="incident-list-container">
            <div className="incident-list-header">
                <div className="search-input-wrapper">
                    <svg
                        className="search-icon"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-2-2m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Hinted search text"
                    />
                </div>
                <button onClick={openModal} className="add-incident-button">
                    Agregar Incidente
                </button>
            </div>

            <div className="incident-list-grid header-row">
                <div className="grid-item">ID</div>
                <div className="grid-item">Título</div>
                <div className="grid-item">Ubicación</div>
                <div className="grid-item">Asignado a</div>
                <div className="grid-item">Fecha</div>
                <div className="grid-item">Acción</div>
            </div>

            {incidents.map((incident) => (
                <IncidentItem key={incident.id} incident={incident} />
            ))}

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Agregar Nuevo Incidente</h2>
                        <div className="modal-content">
                            <label htmlFor="title">Título:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={newIncidentTitle}
                                onChange={handleInputChange}
                            />

                            <label htmlFor="path">Ubicación:</label>
                            <input
                                type="text"
                                id="path"
                                name="path"
                                value={newIncidentPath}
                                onChange={handleInputChange}
                            />

                            <label htmlFor="assignedUser">Asignar a:</label>
                            <select
                                id="assignedUser"
                                name="assignedUser"
                                value={assignedUser}
                                onChange={handleInputChange}
                            >
                                <option value="">Seleccionar usuario</option>
                                {availableUsers.map((user) => (
                                    <option key={user.uid} value={user.email}>
                                        {user.email}
                                    </option>
                                ))}
                            </select>

                            <button onClick={handleAddIncident} className="confirm-button">
                                Guardar Incidente
                            </button>
                            <button onClick={closeModal} className="cancel-button">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Mock initial incidents (you can remove this if you fetch from elsewhere)
const initialIncidents: Incident[] = [
    {
        id: 1,
        fecha: '03-03-2025 17:10',
        assignedUser: 'rene@rene.es',
        title: 'Charco de líquido',
        path: 'Piso 2 en pasillo 3 camino a los baños, entre tienda 1 y tienda 2',
        status: true,
    },
    {
        id: 2,
        fecha: '03-03-2025 10:27',
        assignedUser: 'renecatalanf@gmail.com',
        title: 'Bombilla quemada',
        path: 'Piso 1 pasillo 9, sección de vinos',
        status: true,
    },
    {
        id: 3,
        fecha: '03-03-2025 10:27',
        assignedUser: 'ricf1 @mscloud.ua.es',
        title: 'Cajas en el suelo',
        path: 'Piso 1 pasillo 9, sección de vinos',
        status: false,
    },
];

export default IncidentList;