import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../services/AuthServide';
import { Role } from '../../services/IAuthService';

// Define la interfaz para el estado de autenticación
interface AuthState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: any | null; // Usando unknown como me indicaste
    roles: Role[] | null;
    isLoading: boolean;
    error: string | null;
}

// Define el estado inicial
const initialState: AuthState = {
    user: null,
    roles: null,
    isLoading: false,
    error: null,
};

// Thunk asíncrono para obtener roles del usuario
// Añadimos los tipos genéricos:
// 1. Tipo de lo que devuelve en caso de éxito (Role[])
// 2. Tipo del argumento que recibe el thunk (unknown, ya que currentUser puede ser el objeto de Firebase.User o null temporalmente)
// 3. Tipo del objeto de configuración de la API del thunk, donde especificamos 'rejectValue' como 'string'
export const fetchUserRoles = createAsyncThunk<
    Role[],        // Tipo retornado cuando es 'fulfilled'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,       // Tipo del argumento del thunk (currentUser de Firebase.User | null)
    { rejectValue: string }>(
    'auth/fetchUserRoles',
    async (currentUser, { rejectWithValue }) => {
        if (!currentUser) {
            // Este rejectWithValue devuelve un string
            return rejectWithValue('No user provided for role fetch.');
        }
        try {
            const userRoles = await authService.getUserRoles(currentUser);
            return userRoles;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) { // El catch interno del thunk puede seguir siendo any si no tienes un tipo más específico para los errores de authService
            console.error('Error fetching user roles:', error);
            // Este rejectWithValue también devuelve un string
            return rejectWithValue(error.message || 'Failed to fetch user roles');
        }
    }
);

// ... (el resto de tu authSlice.ts permanece igual)
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setUser: (state, action: PayloadAction<any | null>) => { // Usando unknown
            state.user = action.payload;
            if (!action.payload) {
                state.roles = null;
                state.error = null;
                state.isLoading = false;
            }
        },
        setRoles: (state, action: PayloadAction<Role[] | null>) => {
            state.roles = action.payload;
            state.isLoading = false;
        },
        logout: (state) => {
            state.user = null;
            state.roles = null;
            state.error = null;
            state.isLoading = false;
        },
        setAuthError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserRoles.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserRoles.fulfilled, (state, action: PayloadAction<Role[]>) => {
                state.roles = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchUserRoles.rejected, (state, action) => {
                state.isLoading = false;
                state.roles = null;
                // Aquí, 'action.payload' es el valor que pasamos a 'rejectWithValue',
                // que ahora TypeScript sabe que es un string.
                state.error = action.payload as string;
            });
    },
});

export const { setUser, setRoles, logout, setAuthError, setLoading } = authSlice.actions;

export default authSlice.reducer;