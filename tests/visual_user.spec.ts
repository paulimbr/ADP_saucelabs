import { test, expect, ElementHandle, JSHandle, Response, Page } from '@playwright/test';

test('Get Sauce Demo Screen Shot for reference', async ({ page }) => {
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
    
    // Take a screenshot and use it as reference page
    await page.screenshot({ path: 'before.png', fullPage: true });
    
        // Logout from current user and login to visual_error
        await page.locator('//div[@class="bm-burger-button"]').click();
        await page.locator('//a[@data-test="logout-sidebar-link"]').click();

        await page.waitForURL('https://www.saucedemo.com');
        
        // login to visual_error user
            // Fill in User and Pass
            await page.getByPlaceholder('Username').fill('visual_user');
            await page.getByPlaceholder('Password').fill('secret_sauce');
            // Click to login
            await page.locator('[data-test="login-button"]').click();
            // Wait Inventory page is loaded
            await page.waitForURL('https://www.saucedemo.com/inventory.html');

    // Compare the current page screenshot with the reference before.png image
    const actual = await page.screenshot({ path: 'after.png', fullPage: true });
    await page.waitForTimeout(2000);
    
    await expect(actual).toMatchSnapshot('before.png'); 
    // This test should fail as the standard_user has a huge diff from visual_user

});