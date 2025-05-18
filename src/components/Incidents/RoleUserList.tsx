import React, { useState, useEffect, useContext } from 'react';
import { app } from "../../services/FirebaseStorage";
import { getDatabase, ref, get, update } from "firebase/database";
import { User } from '../../entites/incidentsEntities';
import './RoleUserList.css'; // Crea este archivo CSS
import { AuthContext } from '../../contexts/AuthContext';

const RolesAdmin: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { user: loggedInUser } = useContext(AuthContext);

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

        fetchUsers();
    }, [loggedInUser?.uid]);

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

    if (loading) {
        return <div>Cargando usuarios...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="roles-admin-container">
            <h2>Administración de Roles</h2>
            <div className="user-list">
                {users.map(user => (
                    <div key={user.uid} className="user-card">
                        <h3>{user.email}</h3>
                        <div className="role-toggle">
                            <button
                                className={`role-button ${user.roles?.admin ? 'active' : ''}`}
                                onClick={() => handleRoleChange(user.uid, true)}
                            >
                                Admin
                            </button>
                            <button
                                className={`role-button ${!user.roles?.admin ? 'active' : ''}`}
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