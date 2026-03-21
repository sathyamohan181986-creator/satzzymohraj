import {test} from '@playwright/test';
//import annotation from playwright module

test('Access the URL', async({browser})=>
{
    //chrome - plugin/cookies //information when you open a browser. Because in context all these are present.
    const context = await browser.newContext();//store the variable const is a keyword and context is a variable
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //css, xpath unique identifiers to select the locators
    await page.locator('input#username').fill('rahulshettyacademy');
    await page.locator('input#password').fill('Learning@830$3mK2');
    await page.locator("[type='checkbox']").click();
    await page.locator("[id='signInBtn']").click();
});

