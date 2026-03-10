import {test, expect} from '@playwright/test';

test.describe('Smoke Tests', () => {
    
    test('homepage loads @smoke', async({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle('Swag Labs');
    });

});