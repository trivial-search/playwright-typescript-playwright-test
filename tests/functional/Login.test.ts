import test from '@lib/BaseTest';

// We can use Steps like in Cucmber format as shown below
/*
    To run tests - npx playwright test
    specific test file - npx cross-env ENV=qa npm run test Login.test.ts
    or from package.json 
    npx cross-env ENV=qa npm run test:device
*/

test(`@Smoke Verify Book Store Login`, async ({ loginPage, webActions }) => {
    await test.step(`Navigate to Widgets page`, async () => {
        await webActions.navigateToURL('https://demoqa.com/');
    });
    await test.step(`Click on Book Store Application Icon`, async () => {
        await webActions.clickByText('Book Store Application');
    });
    await test.step(`Click on Login button in Main page`, async () => {
        await loginPage.clickOnLoginMainButton();
    });
    await test.step(`Login to Book Store application`, async () => {
        await loginPage.loginToApplication();
    });
    await test.step(`Verify User is logged in and navigated to Profile page`, async () => {
        await loginPage.verifyProfilePage();
    });
}); 

test('Get list of all tutorials under a particular catetory', async ({ page }) => {
    await page.goto('https://toolsqa.com/');
    await page.locator('span').filter({ hasText: 'Tutorials' }).click();
    await page.getByText('Programming Language').click();
    //ToDo - how many which programming langugage courses exists ?
    var allCourseNames = page.locator('div').filter({ hasText: 'BackJavaData StructuresPythonJavaScript' }).nth(2).allInnerTexts();
    // choose Python courses
    await page.getByRole('list').filter({ hasText: 'BackJavaData StructuresPythonJavaScript' }).getByRole('link', { name: 'Python' }).click();
    console.log(allCourseNames);
    var eachCourseName = (await allCourseNames).toString();
    console.log(eachCourseName);
  });