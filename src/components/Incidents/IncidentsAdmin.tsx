import React, { useState, useEffect } from 'react';
import { Incident } from '../../entites/incidentsEntities';
import './IncidentList.css';
import { app } from "../../services/FirebaseStorage";
import { getDatabase, ref, get, update, orderByChild, query, push } from "firebase/database";
import { User } from '../../entites/incidentsEntities';

import logger from "../../services/logging";

interface IncidentItemProps {
    incident: Incident;
    onIncidentUpdated: () => void;
    onIncidentClick: (incident: Incident) => void;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident, onIncidentUpdated, onIncidentClick }) => {
    const handleCloseIncident = async () => {
        const database = getDatabase(app);
        const incidentRef = ref(database, `incidents/${incident.id}`);

        try {
            await update(incidentRef, { status: false });
            logger.info('Incident new status Closed');
            onIncidentUpdated();
        } catch (error) {
            logger.error('Error closing incident:' + error);
            //console.error('Error closing incident:', error);
        }
    };

    return (
        <>
            <div className="incident-item">
                {incident.status ? (
                    <div className="incident-id" onClick={() => onIncidentClick(incident)} style={{ cursor: 'pointer' }}>INC{incident.id}</div>
                ) : (
                    <div className="incident-id-close" onClick={() => onIncidentClick(incident)} style={{ cursor: 'pointer' }}>INC{incident.id}</div>
                )}

                <div className="incident-title" onClick={() => onIncidentClick(incident)} style={{ cursor: 'pointer' }}>{incident.title}</div>
                <div className="incident-path" onClick={() => onIncidentClick(incident)} style={{ cursor: 'pointer' }}>{incident.path}</div>
                <div className="incident-assigned" onClick={() => onIncidentClick(incident)} style={{ cursor: 'pointer' }}>{incident.assignedUser}</div>
                <div className="incident-date" onClick={() => onIncidentClick(incident)} style={{ cursor: 'pointer' }}>{incident.fecha}</div>
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

        </>

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

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);

    //Para filtrar por titulo o ubicacion los incidentes
    const [searchTerm, setSearchTerm] = useState('');

    const openModal = () => {
        logger.info('Open create Modal');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        logger.info('Close create Modal');
        setIsModalOpen(false);
        setNewIncidentTitle('');
        setNewIncidentPath('');
        setAssignedUserEmail('');
    };

    const openEditModal = (incident: Incident) => {
        logger.info('Open edit Modal');
        setSelectedIncident(incident);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        logger.info('Close edit Modal');
        setIsEditModalOpen(false);
        setSelectedIncident(null);
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
                logger.info('Adding new Incident');
                closeModal();
                setRefreshIncidents(prev => !prev);
            } catch (error) {
                logger.error('Error adding incident:' + error);
                //console.error('Error adding incident:', error);
                setError('Error al agregar el incidente.');
            }
        } else {
            logger.info('Missing param');
            alert('Por favor, completa todos los campos.');
        }
    };

    const handleIncidentUpdated = () => {
        logger.info('Refresh list');
        setRefreshIncidents(prev => !prev);
    };

    const handleUpdateIncident = async () => {
        if (selectedIncident) {
            const database = getDatabase(app);
            const incidentRef = ref(database, `incidents/${selectedIncident.id}`);

            try {
                // creamos el incidente temporal
                const updateData: Partial<Incident> = {
                    title: selectedIncident.title,
                    path: selectedIncident.path,
                    assignedUser: selectedIncident.assignedUser,
                };

                await update(incidentRef, updateData);
                logger.info('Update Incident ' + updateData.title);
                closeEditModal();

                //refrescamos la lista de incidentes para ver los cambios realizados
                setRefreshIncidents(prev => !prev);
            } catch (error) {
                logger.error('Error updating incident:' + error);
                //console.error('Error updating incident:', error);
                setError('Error al actualizar el incidente.');
            }
        }
    };


    useEffect(() => {
        const fetchIncidents = async () => {
            setLoadingIncidents(true);
            const database = getDatabase(app);
            const incidentsRef = ref(database, 'incidents');
            const incidentsQuery = query(incidentsRef, orderByChild('fecha'));

            try {
                const snapshot = await get(incidentsQuery);
                if (snapshot.exists()) {
                    const incidentsData = snapshot.val();
                    const incidentsArray: Incident[] = Object.keys(incidentsData)
                        .map(key => ({
                            id: key,
                            ...incidentsData[key],
                        }))
                        .sort((a, b) => {
                            const dateA = parseDateString(a.fecha);
                            const dateB = parseDateString(b.fecha);
                            return dateB.getTime() - dateA.getTime(); // Newest first
                        });
                    logger.info('Get Incidents: ' + incidentsArray);
                    setIncidents(incidentsArray);
                } else {
                    setIncidents([]);
                    logger.warn('No incidents data available');
                    //console.log('No incidents data available');
                }
            } catch (error) {
                logger.error('Error fetching incidents:' + error);
                //console.error('Error fetching incidents:', error);
                setError('Error al cargar los incidentes.');
            } finally {
                setLoadingIncidents(false);
            }
        };


        const parseDateString = (dateString: string | undefined): Date => {
            if (!dateString) {
                return new Date(0);
            }
            const parts = dateString.split(', ');
            const dateParts = parts[0].split('/');
            const timeParts = parts[1].split(':');

            return new Date(
                parseInt(dateParts[2], 10),
                parseInt(dateParts[1], 10) - 1,
                parseInt(dateParts[0], 10),
                parseInt(timeParts[0], 10),
                parseInt(timeParts[1], 10),
                parseInt(timeParts[2], 10)
            );
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
                    logger.info('Get Users: ' + usersArray);
                    setAvailableUsers(usersArray);
                } else {
                    setAvailableUsers([]);
                    logger.warn('No users data available');
                    //console.log('No users data available');
                }
            } catch (error) {
                logger.error('Error fetching users:' + error);
                //console.error('Error fetching users:', error);
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
                        placeholder="Buscar por título o ubicación"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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

            {incidents
                .filter(incident =>
                    incident.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    incident.path.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((incident) => (
                    <IncidentItem
                        key={incident.id}
                        incident={incident}
                        onIncidentUpdated={handleIncidentUpdated}
                        onIncidentClick={openEditModal}
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
            {isEditModalOpen && selectedIncident && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h2>Incidente INC{selectedIncident.id}</h2>
                            <button onClick={closeEditModal}>
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <div className="modal-content">
                            <label htmlFor="editTitle">Título</label>
                            <input
                                type="text"
                                id="editTitle"
                                name="title"
                                value={selectedIncident.title}
                                onChange={(e) => setSelectedIncident({ ...selectedIncident, title: e.target.value })} // Manejar cambios
                            />

                            <label htmlFor="editPath">Ubicación</label>
                            <input
                                type="text"
                                id="editPath"
                                name="path"
                                value={selectedIncident.path}
                                onChange={(e) => setSelectedIncident({ ...selectedIncident, path: e.target.value })} // Manejar cambios
                            />

                            <label htmlFor="editAssignedUser">Personal Asignado</label>
                            <select
                                id="editAssignedUser"
                                name="assignedUser"
                                value={selectedIncident.assignedUser}
                                onChange={(e) => setSelectedIncident({ ...selectedIncident, assignedUser: e.target.value })} // Manejar cambios
                            >
                                <option value="">Seleccionar usuario</option>
                                {availableUsers.map((user) => (
                                    <option key={user.uid} value={user.email}>
                                        {user.email}
                                    </option>
                                ))}
                            </select>

                            <div className="modal-footer">
                                <button className="confirm-button" onClick={handleUpdateIncident}> {/* Llamar a la función de actualización */}
                                    Guardar
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

/*
{selectedIncident.status && (
                                    <button className="close-incident-button" onClick={() => { closeEditModal(); handleCloseIncident(); }}>
                                        Cerrar incidente
                                    </button>
                                )} 
*/