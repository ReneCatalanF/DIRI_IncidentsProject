import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/AuthServide';
import '../App.css'; // Asegúrate de que este CSS no tenga clases de Tailwind
import { Role } from '../services/IAuthService';

// Importaciones de Redux Toolkit
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/authSlice';
import { setLocale } from '../store/slices/i18nSlice'; // <--- Importa la acción setLocale del slice i18n

// Importación para internacionalización
import { FormattedMessage } from 'react-intl';

export const Navbar: React.FC = () => {
    const { user, roles } = useAppSelector((state) => state.auth);
    const currentLocale = useAppSelector((state) => state.i18n.locale); // <--- Obtén el locale actual de Redux
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await authService.signOut();
            dispatch(logout());
            navigate('/login');
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLocale(event.target.value)); // <--- Despacha la acción para cambiar el locale
    };

    return (
        <nav className="navbar">
            <ul className="nav-menu">
                {user && roles && roles.includes(Role.USER) && (
                    <li>
                        <Link to="/dashboard2">
                            <FormattedMessage id="navbar.myIncidents" />
                        </Link>
                    </li>
                )}

                {user && roles && roles.includes(Role.ADMIN) && (
                    <>
                        <li>
                            <Link to="/dashboard">
                                <FormattedMessage id="navbar.incidents" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin">
                                <FormattedMessage id="navbar.userRoles" />
                            </Link>
                        </li>
                    </>
                )}

                {!user && (
                    <li>
                        <Link to="/login">
                            <FormattedMessage id="navbar.login" />
                        </Link>
                    </li>
                )}
                {!user && (
                    <li>
                        <Link to="/register">
                            <FormattedMessage id="navbar.register" />
                        </Link>
                    </li>
                )}
                {user && (
                    <>
                        {/* Selector de idioma */}
                        <li>
                            <select
                                value={currentLocale}
                                onChange={handleLanguageChange}
                                className="ml-4 p-1 rounded bg-gray-700 text-white border border-gray-600" // Clases de Tailwind para estilo básico
                            >
                                <option value="es">Español</option>
                                <option value="en">English</option>
                            </select>
                        </li>
                        <li>
                            <button onClick={handleLogout}>
                                <FormattedMessage id="navbar.logout" />
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};