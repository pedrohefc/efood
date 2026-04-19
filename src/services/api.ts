import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant1 } from '../pages/Home'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://http://localhost:8080'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurant1[], void>({
      query: () => '/restaurantes'
    }),
    getRestauranteById: builder.query<Restaurant1, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    checkout: builder.mutation<any, any>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetRestauranteByIdQuery,
  useCheckoutMutation
} = api

export default api
