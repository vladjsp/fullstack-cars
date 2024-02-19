import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_BASE_URL;

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const api = createApi({
    reducerPath: 'carsApi',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
});
