import { http, HttpResponse } from 'msw'

import type {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const GetOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@email.com',
      phone: '1234567890',
    },
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Product #1' },
        quantity: 2,
      },
      {
        id: 'order-item-2',
        priceInCents: 4000,
        product: { name: 'Product #1' },
        quantity: 5,
      },
    ],
    status: 'pending',
    totalInCents: 22000,
  })
})
