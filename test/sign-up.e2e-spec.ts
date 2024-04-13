import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Establishment Name').fill('Food Shop')
  await page.getByLabel('Your Name').fill('John Doe')
  await page.getByLabel('Your Email').fill('johndoe@email.com')
  await page.getByLabel('Your Cellphone').fill('1234567890')

  await page.getByRole('button', { name: 'Register' }).click()

  const toast = page.getByText('Successfully registered establishment')

  await expect(toast).toBeVisible()
})

test('sign up with wrong credentials', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Establishment Name').fill('Wrong Name')
  await page.getByLabel('Your Name').fill('John Doe')
  await page.getByLabel('Your Email').fill('johndoe@email.com')
  await page.getByLabel('Your Cellphone').fill('1234567890')

  await page.getByRole('button', { name: 'Register' }).click()

  const toast = page.getByText('Error when registering restaurant')

  await expect(toast).toBeVisible()
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Login' }).click()

  expect(page.url()).toContain('/sign-in')
})
