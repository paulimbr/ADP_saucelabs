import { test, expect, ElementHandle, JSHandle  } from '@playwright/test';
import exp from 'constants';

test('User buying a product', async ({ page }) => {
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

/*   test.step('Product title verification', async () => {

    const titleListLocator = await page.locator('inventory_item_name');
    const productTitleList = await titleListLocator.allTextContents();

    for (const item of productTitleList) {
      await expect(item.slice(0, 10),).toBe('Sauce Labs');
    }

  }) */
    // Add a product to the Cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    
    // Access the Cart page
    await page.locator('//a[@class="shopping_cart_link"]').click();
    await page.waitForURL('https://www.saucedemo.com/cart.html');
    
    // Assert if it is on Cart Page
    const cartTitle = page.locator('[data-test="title"]');
    await expect(cartTitle).toHaveText('Your Cart');

    // Proceed to Checkout
    await page.locator('[data-test="checkout"]').click();
    await page.waitForURL('https://www.saucedemo.com/checkout-step-one.html');

    // Assert if it is on the Checkout Page
    const checkoutTitle = page.locator('[data-test="title"]');
    await expect(checkoutTitle).toHaveText('Checkout: Your Information');

    // Assert if it is possible to proceed without fill in 1st name
    await page.locator('[data-test="continue"]').click();
    const checkoutError1stName = await page.getByText('Error: First Name is required');
    await expect(checkoutError1stName).toBeVisible();
      //fill in 1st Name
      await page.getByPlaceholder('First Name').fill('Learning');

    // Assert if its possible to proceed without fill in 2nd name
    await page.locator('[data-test="continue"]').click();
    const checkoutError2ndName = await page.getByText('Error: Last Name is required');
    await expect(checkoutError2ndName).toBeVisible();
      //fill in 2nd Name
      await page.getByPlaceholder('Last Name').fill('User');

    // Assert if its possible to proceed without fill in Postal code
    await page.locator('[data-test="continue"]').click();
    const checkoutErrorPostalCode = await page.getByText('Error: Postal Code is required');
    await expect(checkoutErrorPostalCode).toBeVisible();
      //fill in Postal Code
      await page.getByPlaceholder('Zip/Postal Code').fill('32899');
      // Click to clear Error msg
      //await page.locator('error-button').click();
      await page.locator('[data-test="continue"]').click();
        
    // Continue to Checkout Overview
    const checkoutOverviewTitle = page.locator('[data-test="title"]');
    await expect(checkoutOverviewTitle).toHaveText('Checkout: Overview');
    
    // Assert if its possible to complete checkout
    await page.locator('[data-test="finish"]').click();
    await page.waitForURL('https://www.saucedemo.com/checkout-complete.html');
    const checkoutCompleteTitle = page.locator('[data-test="title"]');
    await expect(checkoutCompleteTitle).toHaveText('Checkout: Complete!');

    // Click to go Back to Products Page
    await page.locator('[data-test="back-to-products"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    // Assert if its possible to go through Product Details from Image
    await page.locator('[data-test="item-4-img-link"]').click();
    const productDescTitle = page.locator('[data-test="inventory-item-name"]');
    await expect(productDescTitle).toHaveText('Sauce Labs Backpack');

    // Assert if its possible to Add product to Chart
    await page.locator('[data-test="add-to-cart"]').click();
    const removeProductButton = page.locator('[data-test="remove"]');
    await expect(removeProductButton).toBeVisible();
    await page.locator('[data-test="remove"]').click();
        
    // Assert if its possible to go back to products page
    await page.locator('[data-test="back-to-products"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    const productPageTitle = page.locator('[data-test="title"]');
    await expect(productPageTitle).toHaveText('Products')

    // Assert if its possible to go through Products by Title
    await page.locator('[data-test="item-4-title-link"]').click();
    await expect(productDescTitle).toHaveText('Sauce Labs Backpack');

    // Currently this page is accepting to complete checkout without product in the chart. This is a issue that I'll keep tracked
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.waitForURL('https://www.saucedemo.com/cart.html');
    await page.locator('[data-test="checkout"]').click();
    await page.waitForURL('https://www.saucedemo.com/checkout-step-one.html');

      // Fill in User details and Continue to checkout
      await page.getByPlaceholder('First Name').fill('Learning');
      await page.getByPlaceholder('Last Name').fill('User');
      await page.getByPlaceholder('Zip/Postal Code').fill('32899');
      await page.locator('[data-test="continue"]').click();
      
      // Proceed to checkout
      await page.waitForURL('https://www.saucedemo.com/checkout-step-two.html');
      await page.locator('[data-test="finish"]').click();

      // Order completion
      const ordeCompletion = page.locator('[data-test="complete-header"]');
      await expect(ordeCompletion).toHaveText('Thank you for your order!');
 


    
    // Close page
    await page.close();











    


    

    


   
    
    


  });


  // Get Product values


 /*  

  // Go through Product Details Page
  const Prod_img_1 = await page.locator('a#item_4_img_link img:nth-child(1)').click();
  
  await page.waitForURL('https://www.saucedemo.com/inventory-item.html?id=4');

  await page.locator('[data-test="item-sauce-labs-backpack-img"]');
  const Prod_img_1_page = await page.locator('[data-test="item-sauce-labs-backpack-img"]');
  const Prod_desc_1_page = await page.locator('[data-test="inventory-item-desc"]').textContent();
  const Prod_price_1_page = await page.locator('[data-test="inventory-item-price"]').textContent();

  // Verify Desc, Price and title matches
    await expect(Prod_desc_1).toBe(Prod_desc_1_page);
    await expect(Prod_price_1).toBe(Prod_price_1_page);




  // Expects Inventory Page is loaded and products are visible
  await page.locator('button:has-id("add-to-cart-sauce-labs-backpack")').click;
  await expect(page.getByText('Remove')).toBeVisible; */

