import React, { useState, useEffect } from 'react';
import { app } from "../../services/FirebaseStorage";
import { getDatabase, ref, get, update } from "firebase/database";
import { User } from '../../entites/incidentsEntities';
// Importa tu hook tipado de Redux
import { useAppSelector } from '../../store/hooks';
// === IMPORTACIONES PARA INTERNACIONALIZACIÓN ===
import { FormattedMessage } from 'react-intl';
// ===============================================

const RolesAdmin: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
                        .filter(uid => uid !== loggedInUser?.uid)
                        .map(uid => ({
                            uid: uid,
                            email: usersData[uid].email,
                            roles: usersData[uid].roles || { admin: false },
                        }));
                    setUsers(usersArray);
                } else {
                    setUsers([]);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
                setError('rolesAdmin.fetchUsersError'); // Usamos la clave de traducción
            } finally {
                setLoading(false);
            }
        };

        if (loggedInUser && !authLoading) {
            fetchUsers();
        } else if (!authLoading && !loggedInUser) {
            setUsers([]);
            setLoading(false);
            setError('rolesAdmin.noLoggedInUserError'); // Usamos la clave de traducción
        }

    }, [loggedInUser?.uid, authLoading]);

    const handleRoleChange = async (uid: string, isAdmin: boolean) => {
        const database = getDatabase(app);
        const userRef = ref(database, `users/${uid}/roles`);

        try {
            await update(userRef, { admin: isAdmin });
            setUsers(prevUsers =>
                prevUsers.map(user =>
                    user.uid === uid ? { ...user, roles: { admin: isAdmin } } : user
                )
            );
        } catch (error) {
            console.error('Error updating user role:', error);
            setError('rolesAdmin.updateRoleError'); // Usamos la clave de traducción
        }
    };

    if (loading || authLoading) {
        return (
            <div className="p-4 text-center text-lg font-semibold">
                <FormattedMessage id="rolesAdmin.loadingUsers" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 text-center text-red-600 font-bold">
                <FormattedMessage id="common.errorPrefix" /> <FormattedMessage id={error} /> {/* Usamos la clave del estado error */}
            </div>
        );
    }

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-5">
                <FormattedMessage id="rolesAdmin.title" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {users.map(user => (
                    <div key={user.uid} className="border border-gray-300 p-4 rounded-lg text-center shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">{user.email}</h3>
                        <div className="flex justify-center gap-2">
                            <button
                                className={`py-2 px-4 border rounded-md cursor-pointer transition-colors duration-300 ease-in-out
                                    ${user.roles?.admin ? 'bg-green-600 text-white border-green-600 hover:bg-green-700' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`}
                                onClick={() => handleRoleChange(user.uid, true)}
                            >
                                <FormattedMessage id="rolesAdmin.button.admin" />
                            </button>
                            <button
                                className={`py-2 px-4 border rounded-md cursor-pointer transition-colors duration-300 ease-in-out
                                    ${!user.roles?.admin ? 'bg-green-600 text-white border-green-600 hover:bg-green-700' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`}
                                onClick={() => handleRoleChange(user.uid, false)}
                            >
                                <FormattedMessage id="rolesAdmin.button.personal" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RolesAdmin;