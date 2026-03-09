import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage';


test('Add Digital Advance payment', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.email!, process.env.password!);
  await page.context().storageState({ path: 'playwright/.auth/user.json' });

  await page.getByRole('button', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Digital Payment' }).click();
  await page.getByRole('tab', { name: 'Advance Payment' }).click();
  for (let i = 1; i <= 10; i++) {
    await page.getByRole('button', { name: 'Add Advance Payment' }).click();
    await page.getByRole('combobox').click();
    await page.getByRole('combobox').fill('22504150001');
    await page.getByRole('option', { name: 'ABHISHEK POUDEL (' }).click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill(i.toString());
    await page.getByRole('button', { name: 'Save' }).click();
  }
});