import { apiSlice } from '../../app/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserData: builder.mutation({
      query: (data) => ({
        url: 'users/updateMe',
        method: 'PATCH',
        body: data,
      }),
    }),
    updateUserPassword: builder.mutation({
      query: (data) => ({
        url: 'users/updateMyPassword',
        method: 'PATCH',
        body: { ...data },
      }),
    }),
  }),
});

export const { useUpdateUserDataMutation, useUpdateUserPasswordMutation } =
  userApiSlice;
