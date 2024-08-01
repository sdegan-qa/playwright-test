// include playwright module
const { expect } = require('@playwright/test');

// create class
exports.LoginPage = class LoginPage {
    /**
     * 
     * @param {import ('@playwright/test').Page} page
     */
    constructor(page) {
        // Init page object
        this.page = page;
        // Elements
        this.usernameInput = page.getByRole('textbox', { name: "Email or username" });
        this.passwordInput = page.getByRole('textbox', { name: "Password" });
        this.loginBtn = page.getByRole('button', { name: 'LOGIN' });
    }

    // method that navigates to URL
    async goto() {
        await this.page.goto('/');
    }

    // successful login
    async login() {
        // Waits for the username input box to be enabled
        await expect(this.usernameInput).toBeEnabled();

        // Enters the username
        await this.usernameInput.click();
        await this.usernameInput.fill(process.env.USER_NAME);

        // Enters the password
        await this.passwordInput.click();
        await this.passwordInput.fill(process.env.PASSWORD);

        // Clicks on the enabled login button
        await expect(this.loginBtn).toBeEnabled();
        await this.loginBtn.click();
    }
}