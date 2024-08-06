// Include Playwright Module
import { test, expect } from "@playwright/test";
import { DashboardPage } from '../pages/dashboardPage';
import { NavigationPage } from '../pages/navigationPage';

// Write a test
test("Goes to the Dashboard page from the Dashboard using the the Nav Bar", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const navigationPage = new NavigationPage(page);
    // goes to the dashboard page, Clicks on the pokemon button
    await dashboardPage.goto();
    await navigationPage.dashboardNavBar();
});

test("Goes to the Pokemon page from the Dashboard using the the Nav Bar", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const navigationPage = new NavigationPage(page);
    // goes to the dashboard page, Clicks on the pokemon button
    await dashboardPage.goto();
    await navigationPage.pokemonNavBar();
});

test("Goes to the Users page from the Dashboard using the the Nav Bar", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const navigationPage = new NavigationPage(page);
    // goes to the dashboard page, Clicks on the pokemon button
    await dashboardPage.goto();
    await navigationPage.userNavBar();
});

test("Goes to the Space page from the Dashboard using the the Nav Bar", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const navigationPage = new NavigationPage(page);
    // goes to the dashboard page, Clicks on the pokemon button
    await dashboardPage.goto();
    await navigationPage.spaceNavBar();
});

test("Goes to the Sunrise - Sunset page from the Dashboard using the the Nav Bar", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const navigationPage = new NavigationPage(page);
    // goes to the dashboard page, Clicks on the pokemon button
    await dashboardPage.goto();
    await navigationPage.sunriseSunsetNavBar();
});