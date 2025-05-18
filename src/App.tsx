import { useState } from 'react'
import { MenuItem } from './entites/entities';
//import Foods from './components/Foods';
import React from 'react';
import './App.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { AuthProvider } from './contexts/AuthContext';
import AdminRoute from './routes/AdminRoute';
import { ProtectedRoute } from './routes/ProtectedRoute';
//import Foods from './components/Foods';
//import Menus from './components/Menu';
import { Login } from './components/Login';
import Register from './components/Register';
import WelcomeComp from './components/Welcome';
//import Foods from './components/Foods';
import IncidentList from './components/Incidents/IncidentsAdmin';
import IncidentListUser from './components/Incidents/IncidentUser';
import RolesAdmin from './components/Incidents/RoleUserList';
//import Menus from './components/Menu';
//import { Link } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const foodItemsContext = React.createContext<MenuItem[]>([]);

const App: React.FC = () => {
  const [menuItems] = useState<MenuItem[]>([
    {
      "id": 1,
      "name": "Hamburguesa de Pollo",
      "quantity": 40,
      "desc": "Hamburguesa de pollo frito - … y mayonesa",
      "price": 24,
      "image": "Hamburg.jpg"
    },
    {
      "id": 2,
      "name": "Hamburguesa de Vacuno",
      "quantity": 50,
      "desc": "Hamburguesa de Vacuno frito - … con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
    {
      "id": 3,
      "name": "Hamburguesa de Cerdo",
      "quantity": 60,
      "desc": "Hamburguesa de Cerdo frito - … con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
    {
      "id": 4,
      "name": "Hamburguesa de Hormiga",
      "quantity": 70,
      "desc": "Hamburguesa de Hormiga frita - … con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
  ]);
  return (
    <foodItemsContext.Provider value={menuItems}>
      <AuthProvider>
        <Router>
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<WelcomeComp/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<AdminRoute><IncidentList /></AdminRoute>} />
              <Route path="/dashboard2" element={<ProtectedRoute><IncidentListUser /></ProtectedRoute>} />
              <Route path="/admin" element={<AdminRoute><RolesAdmin /></AdminRoute>} />
              <Route path="*" element={<WelcomeComp />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </foodItemsContext.Provider>
  );
};
export default App
