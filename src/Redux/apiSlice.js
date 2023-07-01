// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const greetingApi = createApi({
  reducerPath: 'greetingApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000/' }),
  endpoints: (builder) => ({
    getGreeting: builder.query({
      query: () => 'greetings',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGreetingQuery } = greetingApi;
