import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { GetManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { GetOrderDetailsMock } from './get-order-details-mock'
import { GetOrdersMock } from './get-orders-mock'
import { GetPopularProductsMock } from './get-popular-products-mock'
import { GetProfileMock } from './get-profile-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  GetPopularProductsMock,
  GetProfileMock,
  GetManagedRestaurantMock,
  updateProfileMock,
  GetOrdersMock,
  GetOrderDetailsMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test' && env.MODE !== 'developmentMock') return

  await worker.start()
}
