const { I } = inject();

module.exports = {
  colorDropDown: { xpath: '//label[text()="Color"]/following-sibling::div/a[1]' },
  sizeDropDown: { xpath: '//label[text()="Size"]/following-sibling::div/a[1]' },
  colorOption: { xpath: '//label[text()="Color"]/following-sibling::div/ul/li[2]' },
  sizeOption: { xpath: '//label[text()="Size"]/following-sibling::div/ul/li[2]' },
  productPriceText: { xpath: '//div/span[@class="price-new"]' },

  async selectColor() {
    if (await this.checkElementExist(this.colorDropDown)) {
      I.click(this.colorDropDown);
      I.click(this.colorOption);
    }
  },

  async getProductPrice() {
    const draftProductPrice = await I.grabTextFrom(this.productPriceText);
    const draftColorPrice = await I.grabTextFrom(this.colorOption);
    const draftSizePrice = await I.grabTextFrom(this.sizeOption);

    //return +draftColorPrice.trim().slice(-6, -1)//+ draftColorPrice + draftSizePrice;
    return 1;
  },

  selectSize() {
    I.click(this.sizeDropDown);
    I.click(this.sizeOption);
  },

  async checkSizeExists() {
    return await tryTo(() => I.seeElement(this.sizeDropDown));
  },

  async checkElementExist(element) {
    return Boolean(await I.grabNumberOfVisibleElements(element));
  }
}
