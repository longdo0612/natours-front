import { apiSlice } from '../../app/api/apiSlice';

export const bookingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookedTours: builder.query({
      query: () => 'bookings/my-tours',
    }),
  }),
});

export const { useGetAllBookedToursQuery } = bookingApiSlice;
