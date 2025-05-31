import React, { useState, useEffect } from 'react';
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
// import { useDispatch } from 'react-redux'; // <-- ELIMINA ESTA LÍNEA
import { useAppDispatch } from './store/hooks'; // <-- AÑADE ESTA LÍNEA
import { authService } from './services/AuthServide';
import { setUser, setLoading, setAuthError, fetchUserRoles, setRoles } from './store/slices/authSlice';

export const foodItemsContext = React.createContext<MenuItem[]>([]);

const App: React.FC = () => {
  const [menuItems] = useState<MenuItem[]>([
    // ... tus menuItems
    { "id": 1, "name": "Hamburguesa de Pollo", "quantity": 40, "desc": "Hamburguesa de pollo frito - … y mayonesa", "price": 24, "image": "Hamburg.jpg" },
    { "id": 2, "name": "Hamburguesa de Vacuno", "quantity": 50, "desc": "Hamburguesa de Vacuno frito - … con tomate y mayonesa", "price": 26, "image": "Hamburg.jpg" },
    { "id": 3, "name": "Hamburguesa de Cerdo", "quantity": 60, "desc": "Hamburguesa de Cerdo frito - … con tomate y mayonesa", "price": 26, "image": "Hamburg.jpg" },
    { "id": 4, "name": "Hamburguesa de Hormiga", "quantity": 70, "desc": "Hamburguesa de Hormiga frita - … con tomate y mayonesa", "price": 26, "image": "Hamburg.jpg" },
  ]);

  // Usa tu hook useDispatch tipado
  const dispatch = useAppDispatch(); // <-- CAMBIO AQUÍ

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
          } else if (typeof error === 'string') { // Si el error es el string de rejectWithValue
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

  return (
    <foodItemsContext.Provider value={menuItems}>
      <Router>
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
    </foodItemsContext.Provider>
  );
};

export default App;