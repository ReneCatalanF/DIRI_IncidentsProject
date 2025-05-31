import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; // Importa tu nuevo authReducer

export const store = configureStore({
    reducer: {
        auth: authReducer, // Asigna el authReducer a la clave 'auth' en tu store
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;