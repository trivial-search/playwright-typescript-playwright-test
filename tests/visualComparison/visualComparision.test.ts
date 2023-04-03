import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
test(`Verify Elements Page.`, async ({ page, loginPage,webActions }) => {
    await webActions.navigateToURL('https://demoqa.com/');
    expect(await page.screenshot()).toMatchSnapshot('MainPage.png');
});