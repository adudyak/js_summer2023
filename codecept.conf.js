const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://opencart.qatestlab.net/',
      show: true,
      waitForNavigation: 'networkidle',
      waitForTimeout: 5000,
      windowSize: '1900x900',
    },
    "Mochawesome": {
      "uniqueScreenshotNames": "true"
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
    },
    PriceGrabber: {
      require: './helpers/pricegrabber_helper.js',
    },
    REST: {
      endpoint: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/',
      prettyPrintJson: true,
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
    JSONResponse: {},
  },
  include: {
    I: './steps_file.js',
    basePage: "./pages/base.js",
    accountPage: "./pages/account.js",
    productPage: "./pages/product.js",
    cartPage: "./pages/cart.js",
  },
  "mocha": {
    "reporterOptions": {
      "reportDir": "output"
    }
  },
  name: 'js_summer2023'
}