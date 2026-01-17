import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant1 } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurant1[], void>({
      query: () => ''
    }),
    getRestauranteById: builder.query<Restaurant1, string>({
      query: (id) => id
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestauranteByIdQuery } = api

export default api
