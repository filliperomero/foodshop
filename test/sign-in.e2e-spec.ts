import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your Email').fill('johndoe@email.com')

  await page.getByRole('button', { name: 'Access Dashboard' }).click()

  const toast = page.getByText('Authentication link sent to your email.')

  expect(toast).toBeVisible()

  // await page.waitForTimeout(1000) // Hack since playwright has a bug to the end of the application
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your Email').fill('wrong@email.com')

  await page.getByRole('button', { name: 'Access Dashboard' }).click()

  const toast = page.getByText('Invalid credentials')

  expect(toast).toBeVisible()

  // await page.waitForTimeout(1000) // Hack since playwright has a bug to the end of the application
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New Partner' }).click()

  expect(page.url()).toContain('/sign-up')
})
