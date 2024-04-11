import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { signInMock } from './sign-in-mock'

export const worker = setupWorker(signInMock)

export async function enableMSW() {
  if (env.MODE !== 'test' && env.MODE !== 'developmentMock') return

  await worker.start()
}