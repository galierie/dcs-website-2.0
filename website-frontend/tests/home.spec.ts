import { test, expect } from '@playwright/test';
process.loadEnvFile();

const PUBLIC_URL = process.env.PUBLIC_URL;

test.describe('Navigation bar', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(PUBLIC_URL);
	});

	test('Has correct URL', async ({ page }) => {
		await expect(page).toHaveURL(PUBLIC_URL);
	});

	test.describe('About tab', () => {
		test('Clicking About tab redirects to About page', async ({ page }) => {
			await page.getByRole('link', { name: 'About' }).click();
			await expect(page).toHaveURL(PUBLIC_URL + '/about');
		});

		test('Hovering About then clicking Overview links to Overview section of the About page', async ({
			page
		}) => {
			await page.getByRole('link', { name: 'About' }).hover();
			await page.getByRole('link', { name: 'Overview' }).click();
			await expect(page).toHaveURL(PUBLIC_URL + '/about/overview');
		});

		test('Hovering About then clicking History links to History section of the About page', async ({
			page
		}) => {
			await page.getByRole('link', { name: 'About' }).hover();
			await page.getByRole('link', { name: 'History' }).click();
			await expect(page).toHaveURL(PUBLIC_URL + '/about/history');
		});
	});
});
