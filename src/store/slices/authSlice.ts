import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../services/AuthServide';
import { Role } from '../../services/IAuthService';

// Define la interfaz para el estado de autenticación
interface AuthState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: any | null;
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

export const fetchUserRoles = createAsyncThunk<
    Role[],        
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,       
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


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setUser: (state, action: PayloadAction<any | null>) => { 
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
                
                state.error = action.payload as string;
            });
    },
});

export const { setUser, setRoles, logout, setAuthError, setLoading } = authSlice.actions;

export default authSlice.reducer;