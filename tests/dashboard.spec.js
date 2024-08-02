// Include Playwright Module
const { test, expect } = require("@playwright/test");
const { DashboardPage } = require('../pages/dashboardPage');
const { PokemonPage } = require('../pages/pokemonPage');
const { UsersPage } = require('../pages/usersPage');
const { SpacePage } = require('../pages/spacePage');
const { SunriseSunsetPage } = require('../pages/sunriseSunsetPage');

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
    await spacePage.checkVandenberg3W();
});

test("Goes to the Sunrise - Sunset page from the Dashboard", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const sunriseSunsetPage = new SunriseSunsetPage(page);

    // goes to the dashboard page, Clicks on the sunrise - sunset button
    await dashboardPage.goto();
    await dashboardPage.clickSunriseSunsetBtn();
    await sunriseSunsetPage.checkSelectCityDropdown();
});