import React from 'react';
import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../contexts/AuthContext'; // ¡ELIMINA ESTA LÍNEA!
import { Role } from '../services/IAuthService'; // Asegúrate de que la ruta sea correcta

// Importa tu hook tipado de Redux
import { useAppSelector } from '../store/hooks';

interface AdminRouteProps {
    children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
    // Usa useAppSelector para obtener el usuario, roles y el estado de carga desde Redux
    const { user, roles, isLoading } = useAppSelector((state) => state.auth);

    // Si aún estamos cargando, muestra un mensaje o un spinner
    if (isLoading) {
        return <div>Cargando autenticación...</div>; // Considera usar un componente de carga real aquí
    }

    // Si no hay usuario, o no tiene roles, o no incluye el rol de ADMIN, redirige
    if (!user || !roles || !roles.includes(Role.ADMIN)) {
        // Podrías redirigir a una página de "Acceso Denegado" en lugar de la principal
        return <Navigate to="/" replace />;
    }

    // Si todo está bien, permite el acceso
    return <>{children}</>;
};

export default AdminRoute;