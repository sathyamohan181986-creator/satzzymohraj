import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export class LoginActions {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    const loginPage = new LoginPage(this.page);

    await loginPage.navigate();
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
    await loginPage.selectCheckbox();
    await loginPage.clickSignIn();
  }
}