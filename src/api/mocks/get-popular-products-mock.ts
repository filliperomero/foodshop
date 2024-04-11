import { http, HttpResponse } from 'msw'

import type { GetPopularProductsResponse } from '../get-popular-products'

export const GetPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', async () => {
  return HttpResponse.json([
    { product: 'Food #1', amount: 12 },
    { product: 'Food #2', amount: 21 },
    { product: 'Food #3', amount: 32 },
    { product: 'Food #4', amount: 44 },
    { product: 'Food #5', amount: 15 },
  ])
})
