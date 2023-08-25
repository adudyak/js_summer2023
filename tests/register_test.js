const NEW_USER = {
    firstName: "Alex",
    lastNameField: "22",
    email: Date.now() + '@test.com',
};

Feature('register');

xScenario('click, fill, see', ({ I, basePage }) => {
    //Scenario.skip('click, fill, see', ({ I }) => {
    //Scenario.todo('click, fill, see', ({ I }) => {
    I.amOnPage('/');
    basePage.clickMyAccount();
    basePage.clickRegister();
    //I.click({ xpath: '//*[@id="top-links"]/ul/li/span/span' });
    //I.click({ xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a' });
    I.fillField({ xpath: '//*[@id="input-firstname"]' }, "Alex");
    const regTitleText = 'Register Accoun';
    I.seeTextEquals(regTitleText, { xpath: '//*[@id="content"]/h1' });
});

xScenario('grab', async ({ I }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=20&product_id=29');
    const price = await I.grabTextFrom({ xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span[1]' });
    console.log('Price is: ' + price);
    I.waitForVisible({ xpath: '//*[@id="product"]/div[1]/div/a[2]' }, 10);
    I.waitForInvisible(locator);
    I.click({ xpath: '//*[@id="product"]/div[1]/div/a[2]' });
    I.click({ xpath: '//*[@id="product"]/div[1]/div/ul/li[2]' });
    I.wait(4);
    pause();
});

Scenario('register new user', ({ I, basePage, accountPage }) => {
    I.amOnPage('/');
    basePage.clickMyAccount();
    basePage.clickRegister();
    accountPage.verifyRegisterAccountPage();
    accountPage.fillNewUserForm(NEW_USER);
    pause();
});
