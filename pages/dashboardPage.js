// include playwright module
const { expect } = require('@playwright/test');

// create class
exports.DashboardPage = class DashboardPage {
    /**
     * 
     * @param {import ('@playwright/test').Page} page
     */
    constructor(page) {
        // Init page object
        this.page = page;
        // Elements
        this.pokemonBtn = page.getByRole('heading', { name: 'Pokemon' });
        this.usersBtn = page.getByRole('heading', { name: 'Users' });
        this.spaceBtn = page.getByRole('heading', { name: 'Space' });
        this.sunriseSunsetBtn = page.getByRole('heading', { name: 'Sunrise - Sunset' });
    }

    // method that navigates to the dashboard
    async goto() {
        await this.page.goto('/dashboard');
    }

    async clickPokemonBtn() {
        await expect(this.pokemonBtn).toBeEnabled();
        await this.pokemonBtn.click();
    }

    async clickUsersBtn() {
        await expect(this.usersBtn).toBeEnabled();
        await this.usersBtn.click();
    }

    async clickSpaceBtn() {
        await expect(this.spaceBtn).toBeEnabled();
        await this.spaceBtn.click();
    }

    async clickSunriseSunsetBtn() {
        await expect(this.sunriseSunsetBtn).toBeEnabled();
        await this.sunriseSunsetBtn.click();
    }
}