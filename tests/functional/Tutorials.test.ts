const {test, expect} = require('@playwright/test');


test('Test tutorials', async ({ page }) => {
  await page.goto('https://toolsqa.com/');
  await page.locator('span').filter({ hasText: 'Tutorials' }).click();
  await page.getByText('Programming Language').click();
  //ToDo - how many which programming langugage courses exists ?
  let allCourseNames = page.locator('div').filter({ hasText: 'BackJavaData StructuresPythonJavaScript' }).nth(2).allInnerTexts();
  // choose Python courses
  await page.getByRole('list').filter({ hasText: 'BackJavaData StructuresPythonJavaScript' }).getByRole('link', { name: 'Python' }).click();
  console.log(allCourseNames);
  var eachCourseName = (await allCourseNames).toString();
  console.log(eachCourseName);
});



