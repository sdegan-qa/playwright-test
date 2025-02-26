// include playwright module
import { expect, type Locator, type Page } from '@playwright/test';

// create class
export class LoginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginBtn: Locator;
    private errorBox: Locator;
    private errorMessage: Locator;
    private forgotPasswordBtn: Locator;

    constructor(page: Page) {
        // Init page object
        this.page = page;
        // Elements
        this.usernameInput = page.getByRole('textbox', { name: "Email or username" });
        this.passwordInput = page.getByRole('textbox', { name: "Password" });
        this.loginBtn = page.getByRole('button', { name: 'LOGIN' });
        this.errorBox = page.locator('[role="alert"]');
        this.errorMessage = page.locator('.MuiAlert-message');
        this.forgotPasswordBtn = page.getByRole('button', { name: "FORGOT PASSWORD?" });

    }

    // method that navigates to URL
    async goto() {
        await this.page.goto('/');
    }

    // successful login
    async login(username: string, password: string) {
        // Waits for the username input box to be enabled
        await expect(this.usernameInput).toBeEnabled();

        // Enters the username
        await this.usernameInput.click();
        await this.usernameInput.fill(username);

        // Enters the password
        await this.passwordInput.click();
        await this.passwordInput.fill(password);

        // Clicks on the enabled login button
        await expect(this.loginBtn).toBeEnabled();
        await this.loginBtn.click();
    }

    // error message box
    async loginErrorMessage() {
        // waits for the error box to be visible
        await expect(this.errorBox).toBeVisible();
        // verifies the text in the error box
        await expect(this.errorMessage).toHaveText(`Username must be ${process.env.USER_NAME}.Password must be ${process.env.PASSWORD}.`);
    }

    // Forgot password button
    async forgotPassword() {
        // waits for the forgot password button to be visible
        await expect(this.forgotPasswordBtn).toBeEnabled();
        // Clicks on Forgot Password
        await this.forgotPasswordBtn.click();
        await this.page.waitForTimeout(3000);
    }
}