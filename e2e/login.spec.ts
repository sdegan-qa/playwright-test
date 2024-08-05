// Include Playwright Module
import { test, expect } from "@playwright/test";
import { LoginPage } from '../pages/loginPage';

// Write a test
test("Login to app", async ({ page }) => {
    // creates a constant named loginPage, and 
    // instantiates a new instance of loginPage as its value.
    const loginPage = new LoginPage(page);

    // goes to base URL
    await loginPage.goto();
    // preforms the login
    await loginPage.login();
});

test("Login Failed", async ({ page }) => {
    // creates a constant named loginPage, and 
    // instantiates a new instance of loginPage as its value.
    const loginPage = new LoginPage(page);

    // goes to base URL
    await loginPage.goto();
    // preforms the login with bad creds
    await loginPage.login('admin_user', 'admin_pass');
    await loginPage.loginErrorMessage();
});

test("Forgot Password button", async ({ page }) => {
    // creates a constant named loginPage, and 
    // instantiates a new instance of loginPage as its value.
    const loginPage = new LoginPage(page);

    // goes to base URL
    await loginPage.goto();
    // clicks the forgot password button
    await loginPage.forgotPassword();
});