import { http, HttpResponse } from 'msw'

import type { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const GetManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', async () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Restaurant Name',
    description: 'Custom restaurant description',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
