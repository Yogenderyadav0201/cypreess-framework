class LoginPage {
  constructor() {
    this.emailInput = cy.get('input#email');
    this.passwordInput = cy.get('input#password');
    this.loginButton = cy.get('button#login');
  }

  getEmailInput() {
    return this.emailInput;
  }

  getPasswordInput() {
    return this.passwordInput;
  }

  getLoginButton() {
    return this.loginButton;
  }
}

module.exports = LoginPage;