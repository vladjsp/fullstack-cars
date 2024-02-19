import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import auth from './slices/authSlice';
import { api } from './services/api';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
