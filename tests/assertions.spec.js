import { test, expect } from '@playwright/test';

test.describe('Assertion Samples', () => {
	test('', async ({ page }) => {
		await page.goto('https://www.saucedemo.com/');

		// Different Assertions

		// Verify URL
		await expect(page).toHaveURL('https://www.saucedemo.com/');

		// Verify Title
		await expect(page).toHaveTitle('Swag Labs');
		await page.pause();
	});

	test.only('More Assertions', async ({ page }) => {
		await page.goto('https://www.saucedemo.com/');
		// Assert Visibility
		await expect(page.locator('form')).toBeVisible();

		// Assert element to have text
		await expect(page.locator('h4').first()).toHaveText('Accepted usernames are:');

		await page.pause();
	});
});