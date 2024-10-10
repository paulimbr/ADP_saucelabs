import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('has username field', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  //Expects page to have Username field
  expect(page.getByText('Username').isVisible);
});

test('has password field', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  //Expects page to have Password field
  expect(page.getByText('Password').isVisible);
});

