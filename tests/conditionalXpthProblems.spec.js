const { test, expect } = require('@playwright/test')

test('Amazon - Search Products and list based on star rating and price below 20000', async ({ page }) => {

    // Open Amazon
    await page.goto('https://amazon.in');

    // Validate Title
    console.log(await page.title());
    expect(await page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    // Search on Amazon
    await page.locator("#twotabsearchtextbox").fill('mobile');
    await page.locator("#nav-search-submit-button").click();
    // await page.locator("#twotabsearchtextbox").press('#twotabsearchtextbox', 'Enter');

    await page.waitForSelector("//div[contains(@data-component-type, 's-search-result')]");

    // Do Some Validation
    const searchedItems = await page.locator("//div[contains(@data-component-type, 's-search-result')]");
    console.log(searchedItems);

    const four = await searchedItems.$$("//span[text()='4.0 out of 5 stars']");
    console.log("four star", await four.length);

    for(let fs in four){
        console.log(await)
    }

    const searchedItemsArray = await page.$$("//div[contains(@data-component-type, 's-search-result')]");
    console.log(searchedItemsArray.length);

    const fourStarItems = await page.$$("//div[contains(@data-component-type, 's-search-result')]//span[text()='4.0 out of 5 stars']");
    const itemBelowTwntyThsnt = await page.locator("//div[contains(@data-component-type, 's-search-result')]//span[@class='a-price-whole']");
    
    // for(let fStarItem in fourStarItems){
    //     if(fStarItem.locator())
    // }



    await page.waitForTimeout(5000);

});