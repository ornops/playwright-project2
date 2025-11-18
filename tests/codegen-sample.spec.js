import { test, expect } from '@playwright/test';

test('Codegen code sample', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Products');

  await page.pause();
});

test('Selected color and quantity are reflected in the cart', async ({ page }) => {
  // Step 1: Navigate to Base URL
  await page.goto('https://www.carawayhome.com/?srsltid=AfmBOorQyUTEIeLejVEJNwUJHUjV_fEhpHpL19_N1e6WUWZCG0tidXeL');

  // Step 2: Navigate to Kitchen Tools page
  await page.goto('https://www.carawayhome.com/collections/kitchen-tools');

  // Step 3: Click on the "Prep & Boards Set" product image
  await page.locator('img[alt="Prep & Boards Set"]').click();

  // Step 4: Select the product color "Navy"
  await page.locator('img[alt="Navy"]').click();

  // (Optional) Select quantity = 2 if quantity selector exists
  const quantitySelector = page.locator('select[name="quantity"]');
  if (await quantitySelector.isVisible()) {
    await quantitySelector.selectOption('2');
  }

  // Step 5: Click the "Add to Cart" button
  await page.locator('#add-to-cart-button').click();

  // Step 6: Wait for cart counter to update
  const cartCounter = page.locator('.xdflsbp.x116gngj');
  await expect(cartCounter).toBeVisible();

  // Step 7: Assert the cart counter reflects correct count (e.g., 1 or 2)
  const cartCount = parseInt(await cartCounter.textContent());
  expect(cartCount).toBeGreaterThanOrEqual(1);

  // Step 8: (Optional) Validate cart details page reflects color & quantity
  await page.goto('https://www.carawayhome.com/cart');
  await expect(page.locator('text=Navy')).toBeVisible();
  if (await quantitySelector.isVisible()) {
    await expect(page.locator('input[value="2"]')).toBeVisible();
  }
});

