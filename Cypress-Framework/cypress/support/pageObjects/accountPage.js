class AccountPage {
  constructor() {
    this.deleteAccountButton = cy.get('button#deleteAccountButton');
    this.successMessage = cy.get('div.success-message');
  }

  deleteAccount() {
    this.deleteAccountButton.click();
  }

  get successMessage() {
    return this.successMessage;
  }
}

module.exports = AccountPage;