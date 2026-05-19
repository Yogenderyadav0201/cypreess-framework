class HomePage {
  constructor() {
    this.loginButton = cy.get('button#login');
  }

  visit() {
    cy.visit('https://automationexercise.com');
  }
}

module.exports = HomePage;