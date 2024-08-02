// Include Playwright Module
const { test, expect } = require("@playwright/test");
const { LoginPage } = require('../pages/loginPage');

// Write a test
test("Login to app", async ({ page }) => {
    // creates a constant named loginpage, and 
    // instantiates a new instance of LoginPage as its value.
    const loginpage = new LoginPage(page);

    // goes to base URL
    await loginpage.goto();
    // preforms the login
    await loginpage.login();
});

test("Login Failed", async ({ page }) => {
    // creates a constant named loginpage, and 
    // instantiates a new instance of LoginPage as its value.
    const loginpage = new LoginPage(page);

    // goes to base URL
    await loginpage.goto();
    // preforms the login with bad creds
    await loginpage.login('admin_user', 'admin_pass');
    await loginpage.loginErrorMessage();
});

test("Forgot Password button", async ({ page }) => {
    // creates a constant named loginpage, and 
    // instantiates a new instance of LoginPage as its value.
    const loginpage = new LoginPage(page);

    // goes to base URL
    await loginpage.goto();
    // clicks the forgot password button
    await loginpage.forgotPassword();
});