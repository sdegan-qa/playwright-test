// Include Playwright Module
const { test, expect } = require("@playwright/test");
const { LoginPage } = require('../pages/loginPage');

// Write a test
test("Login to app", async ({ page }) => {
    // go to URL
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.login();
});