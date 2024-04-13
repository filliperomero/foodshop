import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Restaurant Name' }).click()
  await page.getByRole('menuitem', { name: 'Store Profile' }).click()

  await page.getByLabel('Name', { exact: true }).fill('Food Shop')
  await page.getByLabel('Description').fill('Another Description')

  await page.getByRole('button', { name: 'Save' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Profile updated successfully')

  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'Food Shop' })).toBeVisible()
})

test('update profile with error', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Restaurant Name' }).click()
  await page.getByRole('menuitem', { name: 'Store Profile' }).click()

  await page.getByLabel('Name', { exact: true }).fill('Error Name')
  await page.getByLabel('Description').fill('Another Description')

  await page.getByRole('button', { name: 'Save' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Failed to update profile. Try again!')

  await expect(toast).toBeVisible()
})
