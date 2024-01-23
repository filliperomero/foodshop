import { api } from '@/lib/axios'

type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

interface GetDailyRevenueInPeriodQuery {
  to?: Date
  from?: Date
}

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    { params: { from, to } },
  )

  return response.data
}
