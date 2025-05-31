import React, { useState, useEffect } from 'react'; // Elimina 'useContext' de aquí
import { Incident } from '../../entites/incidentsEntities';
import './IncidentList.css';
import { app } from "../../services/FirebaseStorage";
import { getDatabase, ref, get, update, orderByChild, query, equalTo } from "firebase/database";
//import { User } from '../../entites/incidentsEntities'; // Asegúrate de que esta User sea la User de Firebase si la usas
// import { AuthContext } from '../../contexts/AuthContext'; // ¡ELIMINA ESTA LÍNEA!

// Importa tu hook tipado de Redux
import { useAppSelector } from '../../store/hooks';
import { FormattedMessage } from 'react-intl';
// Importa tu tipo IFirebaseUser si lo definiste en IAuthService.ts
//import { IFirebaseUser } from '../../services/IAuthService';

interface IncidentItemProps {
    incident: Incident;
    onIncidentUpdated: () => void;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident, onIncidentUpdated }) => {
    const handleCloseIncident = async () => {
        const database = getDatabase(app);
        const incidentRef = ref(database, `incidents/${incident.id}`);

        try {
            await update(incidentRef, { status: false });
            onIncidentUpdated();
        } catch (error) {
            console.error('Error closing incident:', error);
        }
    };

    return (
        <div className="incident-item" style={{ cursor: 'pointer' }}>
            {incident.status ? (
                <div className="incident-id">INC{incident.id}</div>
            ) : (
                <div className="incident-id-close">INC{incident.id}</div>
            )}

            <div className="incident-title">{incident.title}</div>
            <div className="incident-path">{incident.path}</div>
            <div className="incident-assigned">{incident.assignedUser}</div>
            <div className="incident-date">{incident.fecha}</div>
            <div className="incident-action">
                {incident.status ? (
                    <button className="close-incident-button" onClick={handleCloseIncident}>
                        <FormattedMessage id="incidentItem.closeButton" />
                    </button>
                ) : (
                    <span className="incident-closed">
                        <FormattedMessage id="incidentItem.closedStatus" />
                    </span>
                )}
            </div>
        </div>
    );
};

const IncidentListUser: React.FC = () => {
    const [incidents, setIncidents] = useState<Incident[]>([]);
    const [loadingIncidents, setLoadingIncidents] = useState(true);
    //const [loadingUsers, setLoadingUsers] = useState(true); // Aunque no se usa para usuarios aquí, lo mantengo por si acaso
    const [error, setError] = useState<string | null>(null);
    const [refreshIncidents, setRefreshIncidents] = useState(false);

    // Usa useAppSelector para obtener el usuario y el estado de carga desde Redux
    const { user, isLoading } = useAppSelector((state) => state.auth);

    const [searchTerm, setSearchTerm] = useState('');

    const handleIncidentUpdated = () => {
        setRefreshIncidents(prev => !prev);
    };

    useEffect(() => {
        const fetchIncidents = async () => {
            setLoadingIncidents(true);
            const database = getDatabase(app);
            // Asegúrate de que user.email no sea null antes de usarlo
            if (!user || !user.email) {
                // Si el usuario es null o su email es null, no podemos buscar incidentes
                setIncidents([]);
                setLoadingIncidents(false);
                setError('No user or user email available to fetch incidents.');
                return;
            }

            const incidentsRef = ref(database, 'incidents');
            // La consulta usa el email del usuario logueado de Redux
            const incidentsQuery = query(incidentsRef, orderByChild('assignedUser'), equalTo(user.email));

            try {
                const snapshot = await get(incidentsQuery);
                if (snapshot.exists()) {
                    const incidentsData = snapshot.val();
                    const incidentsArray: Incident[] = Object.keys(incidentsData)
                        .map(key => ({
                            id: key,
                            ...incidentsData[key],
                        }));
                    incidentsArray.sort((a, b) => {
                        const dateA = parseDateString(a.fecha);
                        const dateB = parseDateString(b.fecha);
                        return dateB.getTime() - dateA.getTime(); // Newest first
                    });
                    setIncidents(incidentsArray);
                } else {
                    setIncidents([]);
                    console.log('No incidents data available for this user.');
                }
            } catch (error) {
                console.error('Error fetching incidents:', error);
                setError('Error al cargar los incidentes del usuario.');
            } finally {
                setLoadingIncidents(false);
            }
        };

        // Helper function to parse your date string format
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

        // Solo intenta buscar incidentes si el usuario está disponible Y no está cargando
        // Esto evita que 'user' sea null cuando el componente se renderiza por primera vez
        // y App.tsx todavía está estableciendo el estado de autenticación.
        if (user && !isLoading) {
            fetchIncidents();
        } else if (!isLoading && !user) {
            // Si no está cargando y el usuario es null, significa que no hay usuario logueado
            // (o el usuario fue deslogueado). Podemos limpiar los incidentes y mostrar un mensaje.
            setIncidents([]);
            setLoadingIncidents(false);
            setError('Inicia sesión para ver tus incidentes.');
        }

    }, [refreshIncidents, user, isLoading]); // ¡Importante añadir user e isLoading a las dependencias!

    // Muestra un estado de carga mientras se obtienen los incidentes o el usuario
    if (isLoading || loadingIncidents) {
        return (
            <div>
                <FormattedMessage id="incidentListUser.loading" />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <FormattedMessage id="incidentListUser.errorPrefix" /> {error}
            </div>
        );
    }

    // Si no hay usuario (y ya terminamos de cargar), podrías mostrar un mensaje o redirigir
    // Aunque ProtectedRoute ya debería encargarse de esto, es un doble chequeo
    if (!user) {
        return (
            <div>
                <FormattedMessage id="incidentListUser.loginPrompt" />
            </div>
        );
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
                        placeholder={
                            // Usar useIntl() para placeholders si es necesario, o pasar el intl object como prop
                            // Por simplicidad, aquí se usa FormattedMessage como ejemplo de cómo sería
                            // Para placeholders en inputs, es mejor usar el hook useIntl()
                            // Ejemplo: const intl = useIntl(); <input placeholder={intl.formatMessage({ id: 'incidentListUser.searchPlaceholder' })}
                            // Para este caso, solo necesitas el return, entonces lo dejo como FormattedMessage comentado.
                            // Para un placeholder en un input, es más idiomático usar el hook `useIntl` si el componente lo usa
                            // o simplemente `intl.formatMessage` si lo obtienes del contexto.
                            // De momento, dejo el placeholder con la clave directa para que entiendas la relación.
                            // Si quieres, en la siguiente iteración puedo mostrar cómo usar `useIntl` para placeholders.
                            "ex"
                        }
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="incident-list-grid header-row">
                <div className="grid-item">
                    <FormattedMessage id="incidentListUser.tableHeader.id" />
                </div>
                <div className="grid-item">
                    <FormattedMessage id="incidentListUser.tableHeader.title" />
                </div>
                <div className="grid-item">
                    <FormattedMessage id="incidentListUser.tableHeader.location" />
                </div>
                <div className="grid-item">
                    <FormattedMessage id="incidentListUser.tableHeader.assignedTo" />
                </div>
                <div className="grid-item">
                    <FormattedMessage id="incidentListUser.tableHeader.date" />
                </div>
                <div className="grid-item">
                    <FormattedMessage id="incidentListUser.tableHeader.action" />
                </div>
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
                    />
                ))}
        </div>
    );
};

export default IncidentListUser;