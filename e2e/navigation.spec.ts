// Include Playwright Module
import { test, expect } from "@playwright/test";
import { DashboardPage } from '../pages/dashboardPage';
import { NavigationPage } from '../pages/navigationPage';

// Write a test
test("Goes to the Dashboard page from the Nav Bar", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const navigationPage = new NavigationPage(page);
    // goes to the dashboard page, Clicks on the pokemon button
    await dashboardPage.goto();
    await navigationPage.dashboardNavBar();
});