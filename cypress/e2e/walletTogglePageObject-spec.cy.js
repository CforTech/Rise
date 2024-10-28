const WalletPage = require('../pages/WalletPage');
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

describe('Wallet Balance Toggle using Page Object Model', () => {
  beforeEach(() => {
    cy.visit('https://app.risevest.com/wallet');
  });

});

  it('should show the wallet balance when "Show Balance" is clicked', () => {
    // Verify initial state: Balance should be hidden
    WalletPage.verifyWalletBalanceHidden();

    // Click the "Show Balance" button
    WalletPage.clickToggleButton();

    // Verify the balance is now visible
    WalletPage.verifyWalletBalanceVisible();

    // Verify the button text changes to "Hide Balance"
    WalletPage.verifyToggleButtonText('Hide Balance');
  });

  it('should hide the wallet balance when "Hide Balance" is clicked', () => {
    // Click the button to show the balance first
    WalletPage.clickToggleButton();

    // Verify the balance is visible
    WalletPage.verifyWalletBalanceVisible();

    // Click the button again to hide the balance
    WalletPage.clickToggleButton();

    // Verify the balance is hidden again
    WalletPage.verifyWalletBalanceHidden();

    // Verify the button text changes back to "Show Balance"
    WalletPage.verifyToggleButtonText('Show Balance');
  });
});
