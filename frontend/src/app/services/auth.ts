import { User } from '@prisma/client';
import { api } from './api';

export type UserData = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
type ResponseLoginData = User & { token: string };

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url: 'user/sign-in',
                method: 'POST',
                body: userData,
            }),
        }),
        signUp: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url: 'user/sign-up',
                method: 'POST',
                body: userData,
            }),
        }),
        current: builder.query<ResponseLoginData, void>({
            query: () => ({
                url: 'user/current',
                method: 'GET',
            }),
        }),
    }),
});

export const { useSignInMutation, useSignUpMutation, useCurrentQuery } =
    authApi;

export const {
    endpoints: { signIn, signUp, current },
} = authApi;
