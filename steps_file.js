emailField = {css: "#input-email"};
passwordField = {css: "#input-password"};
signInButon = { xpath: '//a[text()="Sign In"]'};
loginButton = { xpath: '//input[@type="submit"]'};
myOrdersText = { xpath: '//h2[text()="My Orders"]'};

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    login(user) {
      this.amOnPage('/');
      this.click(signInButon);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      this.click(loginButton);
      this.seeTextEquals("My Orders", myOrdersText);
    },

    proceedToCheckout() {
      ///
    }
  });
}
