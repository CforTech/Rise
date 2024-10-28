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
  
    // Helper Method to Login
    login(username, password) {
      this.typeUsername(username);
      this.typePassword(password);
      this.clickLoginButton();
    }
  }
  
  module.exports = new LoginPage();
  