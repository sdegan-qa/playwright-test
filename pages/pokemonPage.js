// include playwright module
const { expect } = require('@playwright/test');

// create class
exports.PokemonPage = class PokemonPage {
    /**
     * 
     * @param {import ('@playwright/test').Page} page
     */
    constructor(page) {
        // Init page object
        this.page = page;
        // Elements
        this.pokemonHeader = page.getByRole('heading', { name: 'Pokemon' });
    }

    // method that navigates to the pokemon page
    async goto() {
        await this.page.goto('/pokemon');
    }

    // checks the header on the pokemon page
    async checkPokemonHeader() {
        await expect(this.pokemonHeader).toHaveText('Pokemon');
    }
};