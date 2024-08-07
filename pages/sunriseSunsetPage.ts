// include playwright module
import { expect, type Locator, type Page } from '@playwright/test';

// create class
export class SunriseSunsetPage {
    private page: Page;
    private sunriseSunsetHeader: Locator;
    private selectCityDropdown: Locator;

    constructor(page: Page) {
        // Init page object
        this.page = page;
        // Elements
        this.sunriseSunsetHeader = page.getByRole('heading', { name: 'Sunrise/Sunset' });
        this.selectCityDropdown = page.getByRole('combobox', { name: 'Select City' });
    }

    // method that navigates to the Sunrise-Sunset page
    async goto() {
        await this.page.goto('/sunrise-sunset');
    }

    // checks the header on the pokemon page
    async checkSunriseSunsetHeader() {
        await expect(this.sunriseSunsetHeader).toHaveText('Sunrise/Sunset');
    }

    // checks if the City Dropdown is visible
    async checkSelectCityDropdown() {
        await expect(this.selectCityDropdown).toBeVisible();
    }
};