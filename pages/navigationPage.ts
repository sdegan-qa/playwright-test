// include playwright module
import { expect, type Locator, type Page } from '@playwright/test';

// create class
export class NavigationPage {
    private page: Page;
    private dashboardBtnNav: Locator;
    private pokemonBtnNav: Locator;
    private usersBtnNav: Locator;
    private spaceBtnNav: Locator;
    private sunriseSunsetBtnNav: Locator;
    private appBar: Locator;

    constructor(page: Page) {
        // Init page object
        this.page = page;
        // Elements
        this.dashboardBtnNav = page.getByRole('button', { name: 'Dashboard' });
        this.pokemonBtnNav = page.getByRole('button', { name: 'Pokemon' });
        this.usersBtnNav = page.getByRole('button', { name: 'Users' });
        this.spaceBtnNav = page.getByRole('button', { name: 'Space' });
        this.sunriseSunsetBtnNav = page.getByRole('button', { name: 'Sunrise - Sunset' });
        this.appBar = page.locator('.MuiAppBar-root');
    }

    // method that navigates to the dashboard
    async dashboardNavBar() {
        await expect(this.dashboardBtnNav).toBeEnabled();
        await this.dashboardBtnNav.click();
        await expect(this.page).toHaveURL('/dashboard');
    }
}