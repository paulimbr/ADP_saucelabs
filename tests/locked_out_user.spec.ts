import { test, expect } from '@playwright/test';

test('Locked out user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
      
  await page.getByPlaceholder('Username').fill('locked_out_user');

  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  const errorText = await page.getByText('Epic sadface: Sorry, this user has been locked out.');
  await expect(errorText).toBeVisible();
  
});


