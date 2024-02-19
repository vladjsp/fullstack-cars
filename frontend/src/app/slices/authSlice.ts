import { User } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../services/auth';
import { RootState } from '../store';

interface InitialState {
    user: (User & { token: string }) | null;
    isAuthenticated: boolean;
}

const initialState: InitialState = {
    user: null,
    isAuthenticated: false,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOut: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApi.endpoints.signIn.matchFulfilled,
                (state, action) => {
                    state.user = action.payload;
                    state.isAuthenticated = true;
                },
            )
            .addMatcher(
                authApi.endpoints.signUp.matchFulfilled,
                (state, action) => {
                    state.user = action.payload;
                    state.isAuthenticated = true;
                },
            )
            .addMatcher(
                authApi.endpoints.current.matchFulfilled,
                (state, action) => {
                    state.user = action.payload;
                    state.isAuthenticated = true;
                },
            );
    },
});

export const { signOut } = slice.actions;
export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) =>
    state.auth.isAuthenticated;
export const selectUser = (state: RootState) => state.auth.user;
