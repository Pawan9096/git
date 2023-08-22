import { test, expect, chromium } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://app.rationarium.com/');
  await page.waitForURL();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.goto('https://prod.rationarium.com/');
  await page.locator('#part-1').getByText('Sign In').click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('pawan.jogi9096@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('123456789');
  await page.locator('form').getByRole('button', { name: 'Sign In' }).click();
});