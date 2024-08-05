// include playwright module
import { expect, type Locator, type Page } from '@playwright/test';

// create class
export class PokemonPage {
    private page: Page;
    private pokemonHeader: Locator;

    constructor(page: Page) {
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