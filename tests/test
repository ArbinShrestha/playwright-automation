import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://testing-tradeflow.waterflowtechnology.net/transaction/payment/digital-payment');
  for (let i = 1; i <= 40; i++) {
    await page.getByRole('button', { name: 'Add Balance Payment' }).click();
    await page.getByRole('combobox').click();
    await page.getByRole('combobox').fill('22504150001');
    await page.getByRole('option', { name: 'ABHISHEK POUDEL (22504150001)' }).click();
    await page.getByRole('textbox').click();

    // Increment the amount dynamically in each loop
    const dynamicValue = (i * 0.8).toFixed(2);  // Increments by 0.8 each iteration
    await page.getByRole('textbox').fill(dynamicValue);
    //lol

    await page.getByRole('button', { name: 'Save' }).click();
  }
});
