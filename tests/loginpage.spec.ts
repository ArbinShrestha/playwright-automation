import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test('Verify user can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.email!, process.env.password!);

  // Assertions belong in the test file, not the page object
  await expect(page.getByText('Home')).toBeVisible();
});