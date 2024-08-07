// include playwright module
import { expect, type Locator, type Page } from '@playwright/test';

// create class
export class SpacePage {
    private page: Page;
    private spaceHeader: Locator;
    private vandenberg3W: Locator;
    private capeCanaveral: Locator;
    private spaceX: Locator;
    private Kwajalein: Locator;
    private vandenberg4E: Locator;
    private Kennedy: Locator;

    constructor(page: Page) {
        // Init page object
        this.page = page;
        // Elements
        this.spaceHeader = page.getByRole('heading', { name: 'Space' });
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

    // checks the header on the pokemon page
    async checkSpaceHeader() {
        await expect(this.spaceHeader).toHaveText('Space');
    }

    // checks if the VAFB SLC 3W name is visible on the Space page
    async checkVandenberg3W() {
        await expect(this.vandenberg3W).toBeVisible();
    }
};