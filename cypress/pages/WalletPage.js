class LoginPage {
    // Page elements
    elements = {
      usernameField: () => cy.get('#email'), // Example selector
      passwordField: () => cy.get('#password'), // Example selector
      //loginButton: () => cy.get(''), // Example selector
      loginButton: () => cy.get('button[type="submit"]'), // Example selector
      errorMessage: () => cy.get('.MuiAlert-message'), // Example selector for error message
    };
    
    // Actions
    typeUsername(username) {
      this.elements.usernameField().clear().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordField().clear().type(password);
    }
  
    clickLoginButton() {
      this.elements.loginButton().click();
    }
  
    // Helper Method to Login
    login(username, password) {
      this.typeUsername(username);
      this.typePassword(password);
      this.clickLoginButton();
      cy.wait(30000)
    }

    
  }
  
class WalletPage {
    // Page elements
    elements = {
      walletBalance: () => cy.get('.mt-3 font-tomato text-[2rem] text-center'),
    };
  
    // Actions
    viewWallet() {
    
      //Navigate to the wallet page
      //cy.get('a[href="/wallet"]').click();
      cy.get('._navLinksWrapper_1v5qx_16 > [href="/wallet"] > :nth-child(2)').click('wallet')
      //cy.get('.font-tomato text-sm lg:text-base focus:ring-offset-0 focus:ring-inset _navLink_1v5qx_16 font-semibold lg:bg-light lg:rounded-l-md lg:border-r-4 lg:border-black').click(); // Change the selector to your actual navigation button
     
    }
  
    // Method to Verify Wallet Balance
    verifyWalletBalance(expectedBalance) {
      this.elements.walletBalance()
        .should('be.visible')
        .and('contain.text', expectedBalance);
    }
  }
  
  module.exports = new LoginPage();
  module.exports = new WalletPage();
  