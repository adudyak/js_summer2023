const Helper = require('@codeceptjs/helper');

class PriceGrabber extends Helper {

  async grabPriceFromString(string) {
    const clearStringPrice = string.replace(/[^\d.]/g, '');
    return parseFloat(clearStringPrice);
  }

  async checkElementExists(locator) {
    //tryTo()
    return Boolean(await this.helpers['Playwright'].grabNumberOfVisibleElements(locator));
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
}

module.exports = PriceGrabber;
