import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://natours-longdo.vercel.app/api/v1',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
  credentials: 'include',
});

/* eslint-disable */
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({}),
});
