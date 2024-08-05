// include playwright module
import { expect, type Locator, type Page } from '@playwright/test';

// create class
export class UsersPage {
    private page: Page;
    private usersHeader: Locator;

    constructor(page: Page) {
        // Init page object
        this.page = page;
        // Elements
        this.usersHeader = page.getByRole('heading', { name: 'User Profile' });
    }

    // method that navigates to the Users page
    async goto() {
        await this.page.goto('/users');
    }

    // checks the header on the users page
    async checkUsersHeader() {
        await expect(this.usersHeader).toHaveText('User Profile');
    }
};