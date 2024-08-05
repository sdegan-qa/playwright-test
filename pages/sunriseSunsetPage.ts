// include playwright module
import { expect, type Locator, type Page } from '@playwright/test';

// create class
export class SunriseSunsetPage {
    private page: Page;
    private selectCityDropdown: Locator;

    constructor(page: Page) {
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