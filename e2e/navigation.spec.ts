// Include Playwright Module
import { test, expect } from "@playwright/test";
import { DashboardPage } from '../pages/dashboardPage';
import { PokemonPage } from '../pages/pokemonPage';
import { UsersPage } from '../pages/usersPage';
import { SpacePage } from '../pages/spacePage';
import { SunriseSunsetPage } from '../pages/sunriseSunsetPage';
import { NavigationPage } from '../pages/navigationPage';

// Write a test
test("Opens and closes the Menu", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const navigationPage = new NavigationPage(page);
    // goes to the dashboard page, Clicks on the pokemon button
    await dashboardPage.goto();
    await navigationPage.menuOpenBtnNavBar();
    await navigationPage.menuCloseBtnNavBar();
});

test("From the Dashboard page, navigate to each page using the nav menu", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const navigationPage = new NavigationPage(page);
    // goes to the dashboard page, Clicks on the pokemon button
    await dashboardPage.goto();
    await navigationPage.dashboardNavBar();
    await dashboardPage.goto();
    await navigationPage.pokemonNavBar();
    await dashboardPage.goto();
    await navigationPage.userNavBar();
    await dashboardPage.goto();
    await navigationPage.spaceNavBar();
    await dashboardPage.goto();
    await navigationPage.sunriseSunsetNavBar();
});

test("From the Pokemon page, navigate to each page using the nav menu", async ({ page }) => {
    const pokemonPage = new PokemonPage(page);
    const navigationPage = new NavigationPage(page);
    // goes to the dashboard page, Clicks on the pokemon button
    await pokemonPage.goto();
    await navigationPage.dashboardNavBar();
    await pokemonPage.goto();
    await navigationPage.pokemonNavBar();
    await pokemonPage.goto();
    await navigationPage.userNavBar();
    await pokemonPage.goto();
    await navigationPage.spaceNavBar();
    await pokemonPage.goto();
    await navigationPage.sunriseSunsetNavBar();
});

test("From the Users page, navigate to each page using the nav menu", async ({ page }) => {
    const usersPage = new UsersPage(page);
    const navigationPage = new NavigationPage(page);
    // goes to the dashboard page, Clicks on the pokemon button
    await usersPage.goto();
    await navigationPage.dashboardNavBar();
    await usersPage.goto();
    await navigationPage.pokemonNavBar();
    await usersPage.goto();
    await navigationPage.userNavBar();
    await usersPage.goto();
    await navigationPage.spaceNavBar();
    await usersPage.goto();
    await navigationPage.sunriseSunsetNavBar();
});

test("From the Space page, navigate to each page using the nav menu", async ({ page }) => {
    const spacePage = new SpacePage(page);
    const navigationPage = new NavigationPage(page);
    // goes to the dashboard page, Clicks on the pokemon button
    await spacePage.goto();
    await navigationPage.dashboardNavBar();
    await spacePage.goto();
    await navigationPage.pokemonNavBar();
    await spacePage.goto();
    await navigationPage.userNavBar();
    await spacePage.goto();
    await navigationPage.spaceNavBar();
    await spacePage.goto();
    await navigationPage.sunriseSunsetNavBar();
});

test("From the Sunrise - Sunset page, navigate to each page using the nav menu", async ({ page }) => {
    const sunriseSunsetPage = new SunriseSunsetPage(page);
    const navigationPage = new NavigationPage(page);
    // goes to the dashboard page, Clicks on the pokemon button
    await sunriseSunsetPage.goto();
    await navigationPage.dashboardNavBar();
    await sunriseSunsetPage.goto();
    await navigationPage.pokemonNavBar();
    await sunriseSunsetPage.goto();
    await navigationPage.userNavBar();
    await sunriseSunsetPage.goto();
    await navigationPage.spaceNavBar();
    await sunriseSunsetPage.goto();
    await navigationPage.sunriseSunsetNavBar();
});