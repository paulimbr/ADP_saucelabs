import { test, expect } from "@playwright/test";

test('User Login', async ({ page }) => {
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
    
    // wait everything is loaded
    await page.waitForLoadState("networkidle");

    // Save the state of the webpage - meaning we are logged in
    await page.context().storageState({ path: "/.LoginAuthSL.json"})
});

