import { test, expect } from '@playwright/test'


test.only('This is a login test', async ({ page }) => {
	await page.goto('https://www.saucedemo.com/');
	await page.pause();
})