import React, { useState, useEffect } from 'react';
import { Incident } from '../../entites/incidentsEntities';
import './IncidentList.css';
import { app } from "../../services/FirebaseStorage"; // Make sure this is the correct path
import { getDatabase, ref, get, update, push } from "firebase/database";
import { User } from '../../entites/incidentsEntities'; // Ensure correct import

interface IncidentItemProps {
    incident: Incident;
    onIncidentUpdated: () => void; // Callback to trigger list refresh
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident, onIncidentUpdated }) => {
    const handleCloseIncident = async () => {
        const database = getDatabase(app);
        const incidentRef = ref(database, `incidents/${incident.id}`);

        try {
            await update(incidentRef, { status: false });
            onIncidentUpdated(); // Call the callback to refresh the list
        } catch (error) {
            console.error('Error closing incident:', error);
            // Optionally display an error message to the user
        }
    };

    return (
        <div className="incident-item">
            <div className="incident-id">INC{incident.id}</div>
            <div className="incident-title">{incident.title}</div>
            <div className="incident-path">{incident.path}</div>
            <div className="incident-assigned">{incident.assignedUser}</div>
            <div className="incident-date">{incident.fecha}</div>
            <div className="incident-action">
                {incident.status ? (
                    <button className="close-incident-button" onClick={handleCloseIncident}>
                        Cerrar incidente
                    </button>
                ) : (
                    <span className="incident-closed">Incidente cerrado</span>
                )}
            </div>
        </div>
    );
};

const IncidentList: React.FC = () => {
    const [incidents, setIncidents] = useState<Incident[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newIncidentTitle, setNewIncidentTitle] = useState('');
    const [newIncidentPath, setNewIncidentPath] = useState('');
    const [assignedUserEmail, setAssignedUserEmail] = useState('');
    const [availableUsers, setAvailableUsers] = useState<User[]>([]);
    const [loadingIncidents, setLoadingIncidents] = useState(true);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refreshIncidents, setRefreshIncidents] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setNewIncidentTitle('');
        setNewIncidentPath('');
        setAssignedUserEmail('');
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
                setAssignedUserEmail(value);
                break;
            default:
                break;
        }
    };

    const handleAddIncident = async () => {
        if (newIncidentTitle && newIncidentPath && assignedUserEmail) {
            const database = getDatabase(app);
            const incidentsRef = ref(database, 'incidents');

            const newIncidentData: Omit<Incident, 'id'> = {
                fecha: new Date().toLocaleString('es-ES'),
                assignedUser: assignedUserEmail,
                title: newIncidentTitle,
                path: newIncidentPath,
                status: true,
            };

            try {
                await push(incidentsRef, newIncidentData);
                closeModal();
                setRefreshIncidents(prev => !prev);
            } catch (error) {
                console.error('Error adding incident:', error);
                setError('Error al agregar el incidente.');
            }
        } else {
            alert('Por favor, completa todos los campos.');
        }
    };

    const handleIncidentUpdated = () => {
        setRefreshIncidents(prev => !prev); // Trigger refresh after closing
    };

    useEffect(() => {
        const fetchIncidents = async () => {
            setLoadingIncidents(true);
            const database = getDatabase(app);
            const incidentsRef = ref(database, 'incidents');

            try {
                const snapshot = await get(incidentsRef);
                if (snapshot.exists()) {
                    const incidentsData = snapshot.val();
                    const incidentsArray: Incident[] = Object.keys(incidentsData).map(key => ({
                        id: key,
                        ...incidentsData[key],
                    }));
                    setIncidents(incidentsArray);
                } else {
                    setIncidents([]);
                    console.log('No incidents data available');
                }
            } catch (error) {
                console.error('Error fetching incidents:', error);
                setError('Error al cargar los incidentes.');
            } finally {
                setLoadingIncidents(false);
            }
        };

        fetchIncidents();
    }, [refreshIncidents]);

    useEffect(() => {
        const fetchNonAdminUsers = async () => {
            setLoadingUsers(true);
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
                    setAvailableUsers([]);
                    console.log('No users data available');
                }
            } catch (error) {
                console.error('Error fetching users:', error);
                setError('Error al cargar los usuarios.');
            } finally {
                setLoadingUsers(false);
            }
        };

        fetchNonAdminUsers();
    }, []);

    if (loadingIncidents || loadingUsers) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
                <IncidentItem
                    key={incident.id}
                    incident={incident}
                    onIncidentUpdated={handleIncidentUpdated} // Pass the callback
                />
            ))}

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h2>Creando Incidente</h2>
                            <button onClick={closeModal}>
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <div className="modal-content">
                            <label htmlFor="title">Título</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={newIncidentTitle}
                                onChange={handleInputChange}
                            />

                            <label htmlFor="path">Ubicación</label>
                            <input
                                type="text"
                                id="path"
                                name="path"
                                value={newIncidentPath}
                                onChange={handleInputChange}
                            />

                            <label htmlFor="assignedUser">Personal Asignado</label>
                            <select
                                id="assignedUser"
                                name="assignedUser"
                                value={assignedUserEmail}
                                onChange={handleInputChange}
                            >
                                <option value="">Seleccionar usuario</option>
                                {availableUsers.map((user) => (
                                    <option key={user.uid} value={user.email}>
                                        {user.email}
                                    </option>
                                ))}
                            </select>

                            <div className="modal-footer">
                                <button onClick={handleAddIncident} className="confirm-button">
                                    Agregar Incidente
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IncidentList;