import { http, HttpResponse } from 'msw'

import { GetManagerRestaurantResponse } from '../get-manager'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagerRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    managerId: 'custom-user-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description',
    createdAt: new Date(),
    updatedAt: null,
  })
})
