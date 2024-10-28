class LoginPage {
    // Page elements
    elements = {
      usernameField: () => cy.get('#email'), 
      passwordField: () => cy.get('#password'),
      //loginButton: () => cy.get(''),
      loginButton: () => cy.get('button[type="submit"]'),
      errorMessage: () => cy.get('.MuiAlert-message'), 
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
  
    // Method to Login
    login(username, password) {
      this.typeUsername(username);
      this.typePassword(password);
      this.clickLoginButton();
    }
  }

class WalletPage {
    // Page elements
    elements = {
      toggleButton: () => cy.get('[aria-hidden="false"] > .p-5 > p.flex > button.text-soft > [data-testid="VisibilityOffIcon"]'),
      walletBalance: () => cy.get('.mt-3 font-tomato text-[2rem] text-center'),
    };
  
    // Actions
    clickToggleButton() {
      this.elements.toggleButton().click();
    }
  
    // Verifications
    verifyWalletBalanceVisible() {
      this.elements.walletBalance().should('be.visible').and('contain', '$0.00');
    }
  
    verifyWalletBalanceHidden() {
      this.elements.walletBalance().should('not.be.visible');
    }
  
    verifyToggleButtonText(expectedText) {
      this.elements.toggleButton().should('have.text', expectedText);
    }
  }
  module.exports = new LoginPage();
  module.exports = new WalletPage();
  