import { apiSlice } from '../../app/api/apiSlice';

export const tourApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTours: builder.query({
      query: () => 'tours',
    }),
    getTourById: builder.query({
      query: (id) => `tours/${id}`,
    }),
    getTourBySlug: builder.query({
      query: (slug) => `tours/slug/${slug}`,
    }),
    getCheckoutSession: builder.query({
      query: (id) => `bookings/checkout-session/${id}`,
    }),
  }),
});

export const {
  useGetAllToursQuery,
  useGetTourByIdQuery,
  useGetTourBySlugQuery,
  useGetCheckoutSessionQuery,
} = tourApiSlice;
