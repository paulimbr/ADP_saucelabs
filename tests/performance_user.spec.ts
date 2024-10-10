import { test, expect, ElementHandle, JSHandle, Response, Page } from '@playwright/test';

test('Verify performance', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    // wait everything is loaded
    await page.waitForLoadState("networkidle");
    // Fill in User and Pass
    await page.getByPlaceholder('Username').fill('performance_glitch_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    // Click to login
    await page.locator('[data-test="login-button"]').click();
    // Wait Inventory page is loaded
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    // this page actions to navigate between pages takes long time as can be evaluated after run the tests

    // Assert if its possible to go through Product Details from Image
    await page.locator('[data-test="item-4-img-link"]').click();
    
    // Assert if its possible to go back to Products page
    await page.locator('[data-test="back-to-products"]').click();

    await page.waitForURL('https://www.saucedemo.com/inventory.html');


    
 

});