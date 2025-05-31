import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/AuthServide";
import '../App.css'; // Asegúrate de que la ruta sea correcta

import { useAppDispatch } from '../store/hooks'; // Importa useAppDispatch
import { setLoading, setAuthError } from '../store/slices/authSlice'; // Acciones opcionales para manejo de carga/errores

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>(''); // Error local del formulario
    const [success, setSuccess] = useState<string>(''); // Mensaje de éxito local
    const navigate = useNavigate();
    const dispatch = useAppDispatch(); // Obtén el dispatcher de Redux

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(''); // Limpia el error local
        setSuccess(''); // Limpia el mensaje de éxito local

        dispatch(setAuthError(null)); // Opcional: Limpia errores previos en el store de Redux
        dispatch(setLoading(true)); // Opcional: Indica que el proceso de registro ha empezado

        try {
            // Realiza el registro con Firebase
            const userCredential = await authService.signUp(email, password);
            console.log("Usuario registrado:", userCredential.user);

            // Establece los roles iniciales en tu base de datos
            await authService.setUserRoles(userCredential.user.uid, {
                email: userCredential.user.email,
                roles: { admin: false } // Asigna el rol de usuario normal por defecto
            });

            // Firebase onAuthStateChanged en App.tsx se encargará de actualizar el store de Redux
            // con el nuevo usuario y sus roles después de este registro exitoso.

            setSuccess('Registro exitoso. Redirigiendo...');
            setTimeout(() => {
                navigate('/'); // Redirige al dashboard o la página principal
            }, 2000);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) { // Captura el error de Firebase/servicio
            console.error("Error al registrarse:", error);
            setError(error.message); // Muestra el error en el formulario
            dispatch(setAuthError(error.message)); // Opcional: Guarda el error en el store de Redux
        } finally {
            dispatch(setLoading(false)); // Opcional: Finaliza el estado de carga
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Registrarse</h2>
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Registrarse</button>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
        </form>
    );
};

export default Register;