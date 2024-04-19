import { http, HttpResponse } from 'msw'

import { GetPopularProducts } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProducts
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza Shop 1', amount: 5 },
    { product: 'Pizza Shop 2', amount: 5 },
    { product: 'Pizza Shop 3', amount: 5 },
    { product: 'Pizza Shop 4', amount: 5 },
    { product: 'Pizza Shop 5', amount: 5 },
  ])
})
