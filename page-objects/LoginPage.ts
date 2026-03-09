import { type Page, type Locator } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load .env as early as possible
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// Optional: fail fast if critical variable is missing
if (!process.env.baseURL) {
  throw new Error(
    'baseURL is not defined in .env!\n' +
    'Make sure .env exists in project root and contains: baseURL=https://testing-tradeflow.waterflowtechnology.net/'
  );
}

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email' }); // Using recommended getBy* locators
    this.passwordInput =  page.getByRole('textbox', { name: 'Enter Your Password' });
    this.loginButton = page.getByRole('button', { name: 'Sign In' });
  }

  async goto() {
    await this.page.goto(process.env.baseURL!);
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password!);
    await this.loginButton.click();
  }
}
