const WalletPage = require('../pages/WalletPage');
const LoginPage = require('../pages/LoginPage');

describe('Login Tests', () =>{ 
    beforeEach(() => {
      // login page URL
      cy.visit('https://app.risevest.com/login');
    });
  
    it('should successfully login with valid credentials', () => {
      // Enter valid credentials for a successful login
      LoginPage.login('olukotuntimothy72@gmail.com', 'Bamidele@2016');
    });

    it('should display the correct wallet balance', () => {
      // Navigate to the Wallet Page
      WalletPage.viewWallet();
  
      // Replace with the expected wallet balance value for the test
      const expectedBalance = '$0.00';
  
      // Verify that the wallet balance is displayed correctly
      WalletPage.verifyWalletBalance(expectedBalance);
    });
    
});




