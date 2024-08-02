// include playwright module
const { expect } = require('@playwright/test');

// create class
exports.SunriseSunsetPage = class SunriseSunsetPage {
    /**
     * 
     * @param {import ('@playwright/test').Page} page
     */
    constructor(page) {
        // Init page object
        this.page = page;
        // Elements
        this.selectCityDropdown = page.getByRole('combobox', { name: 'Select City' });
    }

    // method that navigates to the Sunrise-Sunset page
    async goto() {
        await this.page.goto('/sunrise-sunset');
    }

    // checks if the City Dropdown is visible
    async checkSelectCityDropdown() {
        await expect(this.selectCityDropdown).toBeVisible();
    }
};