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
    private menuBtn: Locator;
    private menuCloseBtn: Locator

    constructor(page: Page) {
        // Init page object
        this.page = page;
        // Elements
        this.dashboardBtnNav = page.getByRole('button', { name: 'Dashboard' });
        this.pokemonBtnNav = page.getByRole('button', { name: 'Pokemon' });
        this.usersBtnNav = page.getByRole('button', { name: 'Users' });
        this.spaceBtnNav = page.getByTestId('RocketOutlinedIcon');
        this.sunriseSunsetBtnNav = page.getByRole('button', { name: 'Sunrise - Sunset' });
        this.appBar = page.locator('.MuiAppBar-root');
        this.menuBtn = page.getByRole('button', { name: 'menu' });
        this.menuCloseBtn = page.getByTestId('ChevronLeftIcon');
    }

    // method that checks the app header
    async appHeaderBar() {
        await expect(this.appBar).toBeVisible();
        await expect(this.appBar.getByText('QA Playground', { exact: true })).toBeVisible();
        await this.appBar.hover();
    }

    // method that opens the side nav
    async menuOpenBtnNavBar() {
        await expect(this.menuBtn).toBeVisible();
        await this.menuBtn.click();
    }

    // method that closes the side nav
    async menuCloseBtnNavBar() {
        await expect(this.menuCloseBtn).toBeVisible();
        await this.menuCloseBtn.click();
    }

    // method that navigates to the dashboard page
    async dashboardNavBar() {
        await expect(this.dashboardBtnNav).toBeEnabled();
        await this.dashboardBtnNav.click();
        await expect(this.page).toHaveURL('/dashboard');
        await this.appHeaderBar();
    }
    // method that navigates to the pokemon page
    async pokemonNavBar() {
        await expect(this.pokemonBtnNav).toBeEnabled();
        await this.pokemonBtnNav.click();
        await expect(this.page).toHaveURL('/pokemon');
        await this.appHeaderBar();
    }

    // method that navigates to the users page
    async userNavBar() {
        await expect(this.usersBtnNav).toBeEnabled();
        await this.usersBtnNav.click();
        await expect(this.page).toHaveURL('/user');
        await this.appHeaderBar();
    }

    // method that navigates to the users page
    async spaceNavBar() {
        await expect(this.spaceBtnNav).toBeEnabled();
        await this.spaceBtnNav.click();
        await expect(this.page).toHaveURL('/space');
        await this.appHeaderBar();
    }

    // method that navigates to the sunrise - sunset page
    async sunriseSunsetNavBar() {
        await expect(this.sunriseSunsetBtnNav).toBeEnabled();
        await this.sunriseSunsetBtnNav.click();
        await expect(this.page).toHaveURL('/sunrise-sunset');
        await this.appHeaderBar();
    }
}