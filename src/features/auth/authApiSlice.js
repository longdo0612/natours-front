import { apiSlice } from '../../app/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'users/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: 'users/signup',
        method: 'POST',
        body: { ...data },
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApiSlice;
