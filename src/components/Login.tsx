import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/AuthServide';
import '../App.css';
import { useAppDispatch } from '../store/hooks'; // Importa useAppDispatch
import { setLoading, setAuthError } from '../store/slices/authSlice'; // Importa acciones para manejo de errores/carga (opcional)

export const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>(''); // Este error es local del formulario
    const navigate = useNavigate();
    const dispatch = useAppDispatch(); // Obtén el dispatcher

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(''); // Limpia el error local del formulario
        dispatch(setAuthError(null)); // Opcional: Limpia errores de Redux
        dispatch(setLoading(true)); // Opcional: Indica que la carga de login ha empezado

        try {
            const userCredential = await authService.signIn(email, password);
            console.log("Usuario autenticado:", userCredential.user);

            // Firebase onAuthStateChanged en App.tsx ya manejará la actualización del store de Redux.
            // No necesitamos despachar setUser o setRoles aquí directamente.

            navigate('/'); // Navega a la página principal

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) { // El error local del formulario
            console.error("Error al iniciar sesión:", error);
            setError(error.message); // Muestra el error en el formulario
            dispatch(setAuthError(error.message)); // Opcional: Guarda el error también en Redux
        } finally {
            dispatch(setLoading(false)); // Opcional: Finaliza la carga de login
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>
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
            <button type="submit">Login</button>
            {error && <p className="error-message">{error}</p>}
        </form>
    );
};