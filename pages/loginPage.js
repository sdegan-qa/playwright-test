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
        this.errorBox = page.locator('[role="alert"]');
        this.errorMessage = page.locator('.MuiAlert-message');

    }

    // method that navigates to URL
    async goto() {
        await this.page.goto('/');
    }

    // successful login
    async login(username, password) {
        // Waits for the username input box to be enabled
        await expect(this.usernameInput).toBeEnabled();

        // Enters the username
        await this.usernameInput.click();
        await this.usernameInput.fill(username || process.env.USER_NAME);

        // Enters the password
        await this.passwordInput.click();
        await this.passwordInput.fill(password || process.env.PASSWORD);

        // Clicks on the enabled login button
        await expect(this.loginBtn).toBeEnabled();
        await this.loginBtn.click();
    }

    // error message box
    async loginErrorMessage() {
        // waits for the error box to be visable
        await expect(this.errorBox).toBeVisible();
        // verifies the text in the error box
        await expect(this.errorMessage).toHaveText('Username must be user.Password must be password.');
    }
}