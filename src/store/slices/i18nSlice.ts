import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define la interfaz para el estado del slice
interface I18nState {
    locale: string;
}

// Función auxiliar para obtener el idioma inicial (igual que en App.tsx)
const getInitialLocale = (): string => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale && ['es', 'en'].includes(savedLocale)) { // Asegúrate de que el idioma guardado sea válido
        return savedLocale;
    }
    const browserLang = navigator.language.split('-')[0];
    if (['es', 'en'].includes(browserLang)) { // Asegúrate de que el idioma del navegador sea válido
        return browserLang;
    }
    return 'es'; // Idioma por defecto
};

const initialState: I18nState = {
    locale: getInitialLocale(),
};

const i18nSlice = createSlice({
    name: 'i18n',
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<string>) => {
            state.locale = action.payload;
            localStorage.setItem('locale', action.payload); // Guarda el locale en localStorage
        },
    },
});

export const { setLocale } = i18nSlice.actions;

export default i18nSlice.reducer;