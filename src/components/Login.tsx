import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/AuthServide';
import '../App.css';
import { useAppDispatch } from '../store/hooks';
import { setLoading, setAuthError } from '../store/slices/authSlice';
// === IMPORTACIONES PARA INTERNACIONALIZACIÓN ===
import { FormattedMessage, useIntl } from 'react-intl';
// ===============================================

export const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    // === INICIALIZACIÓN DEL HOOK useIntl ===
    const intl = useIntl();
    // =====================================

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        dispatch(setAuthError(null));
        dispatch(setLoading(true));

        try {
            const userCredential = await authService.signIn(email, password);
            console.log("Usuario autenticado:", userCredential.user);
            navigate('/');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error("Error al iniciar sesión:", error);
            setError(error.message);
            dispatch(setAuthError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2><FormattedMessage id="login.title" /></h2>
            <input
                type="email"
                placeholder={intl.formatMessage({ id: 'login.placeholder.email' })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder={intl.formatMessage({ id: 'login.placeholder.password' })}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">
                <FormattedMessage id="login.button.login" />
            </button>
            {error && <p className="error-message">{error}</p>} {/* Los errores de Firebase se muestran directamente */}
        </form>
    );
};