import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

let browser;
let context;
let page;

test.beforeAll(async () => {
	//launch chrome browser before all tests
	browser = await chromium.launch()
	console.log("Before All Hook, Launch Chromium Browser");

})

test.beforeEach(async () => {
	//create context for a browser
	context = await browser.newContext();
	page = await context.newPage();

	//navigate to test URL
	await page.goto('https://www.saucedemo.com/');
	console.log("Before Each Hook, Launch New Page");
	await page.pause();

})

test.afterEach(async () => {
	//close page and context
	await page.close();
	await context.close();
	console.log("After Each Hook, Close page");
})
test.afterAll(async () => {
	//close browser
	await browser.close();
	console.log("After All Hook, Close browser");
})

test.only('Login Test', async () => {
	await page.locator('#user-name').click();
	await page.locator('#user-name').fill('standard_user')
	await page.locator('#password').click();
	await page.locator('#password').fill('secret_sauce');
	await page.getByRole('button', { name: /login/i }).click();
	await expect(page.getByText('Swag Labs')).toBeVisible();
})
