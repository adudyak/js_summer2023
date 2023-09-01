const USER = {
    email: "165465142125082023@test.com",
    password: "123456",
};

Feature('buy product');

xScenario('login', ({ I }) => {
    I.login(USER);
}).tag("login");

Scenario('buy product', async ({ I, productPage, cartPage, checkoutPage }) => {
    I.login(USER);
    I.amOnPage('/index.php?route=product/product&product_id=44');
    productPage.selectColor();
    productPage.selectSize();
    const productPrice = await productPage.getProductPrice();
    console.log(productPrice);
    //I.proceedToCheckout();
    const totalPrice = await cartPage.getTotalPrice();
    const tax = await cartPage.getTax();
    I.assertEqual(productPrice + tax, totalPrice, "Prices are not in match!");
}).tag("buy");
