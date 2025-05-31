import React, { useState, useEffect } from 'react'; // Elimina 'useContext' de aquí
import { app } from "../../services/FirebaseStorage";
import { getDatabase, ref, get, update } from "firebase/database";
import { User } from '../../entites/incidentsEntities'; // Asegúrate de que esta User tenga la estructura correcta
// import './RoleUserList.css'; // ¡ELIMINA ESTA LÍNEA!
// import { AuthContext } from '../../contexts/AuthContext'; // ¡ELIMINA ESTA LÍNEA!

// Importa tu hook tipado de Redux
import { useAppSelector } from '../../store/hooks';

const RolesAdmin: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Usa useAppSelector para obtener el usuario logueado y el estado de carga desde Redux
    const { user: loggedInUser, isLoading: authLoading } = useAppSelector((state) => state.auth);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const database = getDatabase(app);
            const usersRef = ref(database, 'users');

            try {
                const snapshot = await get(usersRef);
                if (snapshot.exists()) {
                    const usersData = snapshot.val();
                    const usersArray: User[] = Object.keys(usersData)
                        .filter(uid => uid !== loggedInUser?.uid) // Excluir al usuario logueado
                        .map(uid => ({
                            uid: uid,
                            email: usersData[uid].email,
                            roles: usersData[uid].roles || { admin: false }, // Asegurar que roles exista
                        }));
                    setUsers(usersArray);
                } else {
                    setUsers([]);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
                setError('Error al cargar los usuarios.');
            } finally {
                setLoading(false);
            }
        };

        // Solo busca usuarios si el usuario logueado está disponible y la autenticación no está cargando
        if (loggedInUser && !authLoading) {
            fetchUsers();
        } else if (!authLoading && !loggedInUser) {
            // Si no está cargando y no hay un usuario logueado, no mostramos nada o un mensaje
            setUsers([]);
            setLoading(false);
            setError('No hay usuario logueado para administrar roles.');
        }

    }, [loggedInUser?.uid, authLoading]); // Asegúrate de que las dependencias incluyan authLoading

    const handleRoleChange = async (uid: string, isAdmin: boolean) => {
        const database = getDatabase(app);
        const userRef = ref(database, `users/${uid}/roles`);

        try {
            await update(userRef, { admin: isAdmin });
            // Actualizar el estado local para reflejar el cambio inmediatamente
            setUsers(prevUsers =>
                prevUsers.map(user =>
                    user.uid === uid ? { ...user, roles: { admin: isAdmin } } : user
                )
            );
        } catch (error) {
            console.error('Error updating user role:', error);
            setError('Error al actualizar el rol del usuario.');
        }
    };

    if (loading || authLoading) { // Combina el estado de carga local con el de autenticación global
        return <div className="p-4 text-center text-lg font-semibold">Cargando usuarios...</div>;
    }

    if (error) {
        return <div className="p-4 text-center text-red-600 font-bold">Error: {error}</div>;
    }

    return (
        <div className="p-5"> {/* roles-admin-container */}
            <h2 className="text-2xl font-bold mb-5">Administración de Roles</h2> {/* roles-admin-container h2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"> {/* user-list */}
                {users.map(user => (
                    <div key={user.uid} className="border border-gray-300 p-4 rounded-lg text-center shadow-sm"> {/* user-card */}
                        <h3 className="text-xl font-semibold mb-2">{user.email}</h3> {/* user-card h3 */}
                        <div className="flex justify-center gap-2"> {/* role-toggle */}
                            <button
                                className={`py-2 px-4 border rounded-md cursor-pointer transition-colors duration-300 ease-in-out
                                    ${user.roles?.admin ? 'bg-green-600 text-white border-green-600 hover:bg-green-700' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`}
                                onClick={() => handleRoleChange(user.uid, true)}
                            >
                                Admin
                            </button>
                            <button
                                className={`py-2 px-4 border rounded-md cursor-pointer transition-colors duration-300 ease-in-out
                                    ${!user.roles?.admin ? 'bg-green-600 text-white border-green-600 hover:bg-green-700' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`}
                                onClick={() => handleRoleChange(user.uid, false)}
                            >
                                Personal
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RolesAdmin;