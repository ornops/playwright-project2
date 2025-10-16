import { test, expect } from '@playwright/test';

test.describe.only('Assertion Samples', () => {
	test('', async ({ page }) => {
		await page.goto('https://www.saucedemo.com/');

		// Different Assertions

		// To have URL
		await expect(page).toHaveURL('https://www.saucedemo.com/')

		await page.pause();
	})
})