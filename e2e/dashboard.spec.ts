// Include Playwright Module
import { test, expect } from "@playwright/test";
import { DashboardPage } from '../pages/dashboardPage';
import { PokemonPage } from '../pages/pokemonPage';
import { UsersPage } from '../pages/usersPage';
import { SpacePage } from '../pages/spacePage';
import { SunriseSunsetPage } from '../pages/sunriseSunsetPage';

// Write a test
test("Goes to the Pokemon page from the Dashboard", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const pokemonPage = new PokemonPage(page);

    // goes to the dashboard page, Clicks on the pokemon button
    await dashboardPage.goto();
    await dashboardPage.clickPokemonBtn();
    await pokemonPage.checkPokemonHeader();
});

test("Goes to the Users page from the Dashboard", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const usersPage = new UsersPage(page);

    // goes to the dashboard page, Clicks on the users button
    await dashboardPage.goto();
    await dashboardPage.clickUsersBtn();
    await usersPage.checkUsersHeader();
});

test("Goes to the Space page from the Dashboard", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const spacePage = new SpacePage(page);

    // goes to the dashboard page, Clicks on the space button
    await dashboardPage.goto();
    await dashboardPage.clickSpaceBtn();
    await spacePage.checkSpaceHeader();
});

test("Goes to the Sunrise - Sunset page from the Dashboard", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const sunriseSunsetPage = new SunriseSunsetPage(page);

    // goes to the dashboard page, Clicks on the sunrise - sunset button
    await dashboardPage.goto();
    await dashboardPage.clickSunriseSunsetBtn();
    await sunriseSunsetPage.checkSunriseSunsetHeader();
});