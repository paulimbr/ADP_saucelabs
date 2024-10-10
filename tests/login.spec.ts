import { test, expect, ElementHandle, JSHandle  } from '@playwright/test';

test('User Logged in', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    // wait everything is loaded
    await page.waitForLoadState("networkidle");
    // Fill in User and Pass
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    // Click to login
    await page.locator('[data-test="login-button"]').click();
    // Wait Inventory page is loaded
    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    // logout method
    await page.locator('//div[@class="bm-burger-button"]').click();
    await page.locator('//a[@data-test="logout-sidebar-link"]').click();


});
