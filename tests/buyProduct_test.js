const FileReader = require('../helpers/fileReader');
//import readFile from '../helpers/fileReader';

const PATH = './productIds.txt';
const productIds = FileReader.readFile(PATH);

const USER = {
    email: "165465142125082023@test.com",
    password: "123456",
};

let productLink = new DataTable(['productLink']); //
productLink.add(['/index.php?route=product/product&product_id=44']);
productLink.add(['/index.php?route=product/product&product_id=48']);
productLink.add(['/index.php?route=product/product&product_id=68']);

let productLinks = [44, 48, 68];

Feature('buy product');

Before(({ I }) => {
    I.login(USER);
});

xScenario('login', ({ I }) => {
    
}).tag("login");

Data(productLinks).Scenario('buy product', async ({ I, productPage, cartPage, current }) => {
    console.log(FileReader.convertStringToArray(productIds));
    I.amOnPage('/index.php?route=product/product&product_id=' + current);
    I.amOnPage('/index.php?route=product/product&product_id=' + current);
    console.log("Color exists?", await productPage.checkColorExists());
    console.log("Size exists?", await productPage.checkSizeExists());

    productPage.selectColor(current.color);
    productPage.selectColor();
    productPage.selectSize();
    const productPrice = await productPage.getProductPrice();
    console.log(productPrice);
    //I.proceedToCheckout();
    const totalPrice = await cartPage.getTotalPrice();
    const tax = await cartPage.getTax();
    I.assertEqual(productPrice + tax, totalPrice, "Prices are not in match!");
}).tag("buy");

Scenario('buy product', async ({ I, productPage}) => {
    I.amOnPage('/index.php?route=product/product&product_id=44' );
    console.log("Color exists?", await productPage.checkColorExists());
    console.log("Size exists?", await productPage.checkSizeExists());
}).tag("buy");

After(({ I }) => {
    I.logoff();
});

/*
buy products:
44
48
68
45 (x2)
32 (throw Error for n/a product)
*/