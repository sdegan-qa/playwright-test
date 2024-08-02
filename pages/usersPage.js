// include playwright module
const { expect } = require('@playwright/test');

// create class
exports.UsersPage = class UsersPage {
    /**
     * 
     * @param {import ('@playwright/test').Page} page
     */
    constructor(page) {
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