import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext'; // ¡ELIMINA ESTA LÍNEA!
import { authService } from '../services/AuthServide';
import '../App.css';
import { Role } from '../services/IAuthService';

// Importaciones de Redux Toolkit
import { useAppSelector, useAppDispatch } from '../store/hooks'; // Importa tus hooks tipados
import { logout } from '../store/slices/authSlice'; // Importa la acción logout del slice

export const Navbar: React.FC = () => {
    // Usa useAppSelector para obtener el estado del usuario y roles del store de Redux
    const { user, roles } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch(); // Obtén el dispatcher

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await authService.signOut();
            dispatch(logout()); // Despacha la acción de logout para limpiar el estado en Redux
            navigate('/login');
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <nav className="navbar">
            <ul className="nav-menu">
                {user && roles && roles.includes(Role.USER) && (
                    <li><Link to="/dashboard2">My Incidents</Link></li>
                )}

                {user && roles && roles.includes(Role.ADMIN) && (
                    <>
                        <li><Link to="/dashboard">Incidents</Link></li>
                        <li><Link to="/admin">UserRoles</Link></li>
                    </>
                )}

                {!user && <li><Link to="/login">Login</Link></li>}
                {!user && <li><Link to="/register">Registro</Link></li>}
                {user && <li><button onClick={handleLogout}>Logout</button></li>}
            </ul>
        </nav>
    );
};