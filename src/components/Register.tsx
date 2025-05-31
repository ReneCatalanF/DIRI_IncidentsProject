import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/AuthServide";
import '../App.css';

import { useAppDispatch } from '../store/hooks';
import { setLoading, setAuthError } from '../store/slices/authSlice';
// === IMPORTACIONES PARA INTERNACIONALIZACIÓN ===
import { FormattedMessage, useIntl } from 'react-intl';
// ===============================================

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    // === INICIALIZACIÓN DEL HOOK useIntl ===
    const intl = useIntl();
    // =====================================

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        dispatch(setAuthError(null));
        dispatch(setLoading(true));

        try {
            const userCredential = await authService.signUp(email, password);
            console.log("Usuario registrado:", userCredential.user);

            await authService.setUserRoles(userCredential.user.uid, {
                email: userCredential.user.email,
                roles: { admin: false }
            });

            // === MENSAJE DE ÉXITO TRADUCIDO ===
            setSuccess(intl.formatMessage({ id: 'register.successMessage' }));
            // ==================================
            setTimeout(() => {
                navigate('/');
            }, 2000);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error("Error al registrarse:", error);
            setError(error.message);
            dispatch(setAuthError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h2><FormattedMessage id="register.title" /></h2>
            <input
                type="email"
                placeholder={intl.formatMessage({ id: 'register.placeholder.email' })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder={intl.formatMessage({ id: 'register.placeholder.password' })}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">
                <FormattedMessage id="register.button.register" />
            </button>
            {error && <p className="error-message">{error}</p>} {/* Los errores de Firebase se muestran directamente */}
            {success && <p className="success-message">{success}</p>}
        </form>
    );
};

export default Register;