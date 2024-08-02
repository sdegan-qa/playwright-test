// include playwright module
const { expect } = require('@playwright/test');

// create class
exports.SpacePage = class SpacePage {
    /**
     * 
     * @param {import ('@playwright/test').Page} page
     */
    constructor(page) {
        // Init page object
        this.page = page;
        // Elements
        this.vandenberg3W = page.getByRole('heading', { name: 'Vandenberg Space Force Base Space Launch Complex 3W (VAFB SLC 3W)' });
        this.capeCanaveral = page.getByRole('heading', { name: 'Cape Canaveral Space Force Station Space Launch Complex 40 (CCSFS SLC 40)' });
        this.spaceX = page.getByRole('heading', { name: 'SpaceX South Texas Launch Site (STLS)' });
        this.Kwajalein = page.getByRole('heading', { name: 'Kwajalein Atoll Omelek Island (Kwajalein Atoll)' });
        this.vandenberg4E = page.getByRole('heading', { name: 'Vandenberg Space Force Base Space Launch Complex 4E (VAFB SLC 4E)' });
        this.Kennedy = page.getByRole('heading', { name: 'Kennedy Space Center Historic Launch Complex 39A (KSC LC 39A)' });
    }

    // method that navigates to the Space page
    async goto() {
        await this.page.goto('/space');
    }

    // checks if the VAFB SLC 3W name is visible on the Space page
    async checkVandenberg3W() {
        await expect(this.vandenberg3W).toBeVisible();
    }
};