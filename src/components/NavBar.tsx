import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { authService } from '../services/AuthServide';
import '../App.css';
import { Role } from '../services/IAuthService';
//import { Incident } from '../entites/incidentsEntities';

/*
renecatalanf@gmail.com
rene1234

ricf1@mscloud.ua.es
rene1234
*/

export const Navbar: React.FC = () => {
    const { user, roles } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await authService.signOut();
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
                    <li><Link to="/dashboard">Incidents</Link></li>
                )}
                {!user && <li><Link to="/login">Login</Link></li>}
                {!user && <li><Link to="/register">Registro</Link></li>}
                {user && <li><button onClick={handleLogout}>Logout</button></li>}
            </ul>
        </nav>
    );
};