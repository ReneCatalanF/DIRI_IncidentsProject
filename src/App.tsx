import React, { useEffect } from 'react';
import { MenuItem } from './entites/entities';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import AdminRoute from './routes/AdminRoute';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { Login } from './components/Login';
import Register from './components/Register';
import WelcomeComp from './components/Welcome';
import IncidentList from './components/Incidents/IncidentsAdmin';
import IncidentListUser from './components/Incidents/IncidentUser';
import RolesAdmin from './components/Incidents/RoleUserList';

// Importaciones de Redux y AuthService
import { useAppDispatch, useAppSelector } from './store/hooks'; // <--- Importa useAppSelector
import { authService } from './services/AuthServide';
import { setUser, setLoading, setAuthError, fetchUserRoles, setRoles } from './store/slices/authSlice';

// === IMPORTACIONES PARA INTERNACIONALIZACIÓN ===
import { IntlProvider } from 'react-intl';
import esMessages from './translations/es.json';
import enMessages from './translations/en.json';

// Mapeo de mensajes por idioma
const allMessages: { [key: string]: Record<string, string> } = { // Cambiado el nombre a allMessages para evitar conflicto
  es: esMessages,
  en: enMessages,
};
// =======================================

export const foodItemsContext = React.createContext<MenuItem[]>([]);

const App: React.FC = () => {

  const dispatch = useAppDispatch();

  // Usando el Redux sacamos el locale
  const locale = useAppSelector((state) => state.i18n.locale);

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged(async (currentUser) => {
      dispatch(setLoading(true));
      dispatch(setUser(currentUser));

      if (currentUser) {
        try {
          await dispatch(fetchUserRoles(currentUser)).unwrap();
          dispatch(setAuthError(null));
        } catch (error: unknown) {
          console.error('Error al obtener los roles en App:', error);
          if (error instanceof Error) {
            dispatch(setAuthError(error.message));
          } else if (typeof error === 'string') {
            dispatch(setAuthError(error));
          } else {
            dispatch(setAuthError('An unknown error occurred while fetching roles.'));
          }
          dispatch(setRoles(null));
          dispatch(setUser(null));
        } finally {
          dispatch(setLoading(false));
        }
      } else {
        dispatch(setRoles(null));
        dispatch(setLoading(false));
        dispatch(setAuthError(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  // Ya no necesitas handleChangeLanguage aquí, porque el Navbar despachará la acción directamente.

  return (
    < IntlProvider locale={locale} messages={allMessages[locale] || allMessages['es']} defaultLocale="es" >
      <Router>
        {/* Navbar ahora puede obtener el locale de Redux directamente */}
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<WelcomeComp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<AdminRoute><IncidentList /></AdminRoute>} />
            <Route path="/dashboard2" element={<ProtectedRoute><IncidentListUser /></ProtectedRoute>} />
            <Route path="/admin" element={<AdminRoute><RolesAdmin /></AdminRoute>} />
            <Route path="*" element={<WelcomeComp />} />
          </Routes>
        </div>
      </Router>
    </IntlProvider >
  );
};

export default App;