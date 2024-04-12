import { http, HttpResponse } from 'msw'

import type { GetProfileResponse } from '../get-profile'

export const GetProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  async () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'johndoe@email.com',
      phone: '123456789',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
