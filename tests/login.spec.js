import { test, expect } from '@playwright/test'


test.only('This is a login/logout test', async ({ page }) => {
	await page.goto('https://www.saucedemo.com/');
	await page.locator('#user-name').click();
	await page.locator('#user-name').fill('standard_user')
	await page.locator('#password').click();
	await page.locator('#password').fill('secret_sauce');
	await page.getByRole('button', { name: /login/i }).click();
	await expect(page.getByText('Swag Labs')).toBeVisible();
	await page.getByRole('button', { name: 'Open Menu' }).click()
	await page.getByRole('link', { name: 'Logout' }).click();

	await page.pause();
})