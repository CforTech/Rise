const LoginPage = require('../pages/LoginPage');


describe('Login Tests', () => {
  beforeEach(() => {
    // login page URL
    cy.visit('https://app.risevest.com/login');
  });

  it('should successfully login with valid credentials', () => {
    // Enter valid credentials for a successful login
    LoginPage.login('olukotuntimothy72@gmail.com', 'Bamidele@2016');
    
  });

  it('should display an error message on invalid login', () => {
    //Invalid credentials
    LoginPage.login('oolukotuntimothy72@gmail.com', 'Bammidele@2016');
    
    // Assert the error message
    LoginPage.elements.errorMessage().should('contain', 'Invalid email or password.');
  });
});
