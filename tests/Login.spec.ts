import { test } from '@playwright/test';
import { LoginActions } from '../src/actions/LoginActions';

test('Login Test', async ({ page }) => {
  const login = new LoginActions(page);

  await login.login('rahulshettyacademy', 'learning');
});