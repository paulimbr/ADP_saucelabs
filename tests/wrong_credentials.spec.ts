import { test, expect } from '@playwright/test';
test('User inserts wrong credentials',async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('randompass123');
  
    await page.locator('[data-test="login-button"]').click();
    
    const errorText = await page.getByText('Epic sadface: Username and password do not match any user in this service');
    await expect(errorText).toBeVisible();

});

test('Username not inserted',async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Password').fill('randompass123');
    await page.locator('[data-test="login-button"]').click();
    
    const errorText = await page.getByText('Epic sadface: Username is required');
    await expect(errorText).toBeVisible();

});

test('Password not inserted',async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.locator('[data-test="login-button"]').click();
    
    const errorText = await page.getByText('Epic sadface: Password is required');
    await expect(errorText).toBeVisible();

});

test('Username and Password is blank',async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    await page.locator('[data-test="login-button"]').click();
    
    const errorText = await page.getByText('Epic sadface: Username is required');
    await expect(errorText).toBeVisible();

});