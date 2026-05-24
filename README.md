
CYPRESS FRAMEWORK - COMPLETE YOUTUBE VIDEO NOTES

1. WHAT IS CYPRESS?
- Cypress is a modern JavaScript-based automation testing framework.
- Used for UI Testing, API Testing, and End-to-End Testing.
- Runs directly inside the browser.
- No Selenium WebDriver required.

--------------------------------------------------

2. WHY WE USE CYPRESS?
- Fast execution
- Automatic waiting
- Easy setup
- Real-time reload
- Better debugging
- Screenshots and videos support
- API testing support

--------------------------------------------------

3. CYPRESS INSTALLATION

Step 1:
Install Node.js

Step 2:
Create Project

mkdir cypress-project
cd cypress-project

Step 3:
Initialize npm

npm init -y

Step 4:
Install Cypress

npm install cypress --save-dev

Step 5:
Open Cypress

npx cypress open

--------------------------------------------------

4. FOLDER STRUCTURE

cypress/
 ├── e2e
 ├── fixtures
 ├── support
 ├── screenshots
 ├── videos

e2e → Test Cases
fixtures → Test Data
support → Reusable Commands

--------------------------------------------------

5. FIRST CYPRESS TEST

describe('Login Test', () => {

  it('Verify Login', () => {

    cy.visit('https://example.com')

    cy.get('#username').type('admin')

    cy.get('#password').type('admin123')

    cy.get('#loginBtn').click()

  })

})

--------------------------------------------------

6. LOCATORS IN CYPRESS

ID Locator:
cy.get('#username')

Class Locator:
cy.get('.login-btn')

Attribute Locator:
cy.get('[type="text"]')

Name Locator:
cy.get('[name="email"]')

XPath:
Requires plugin

npm install -D cypress-xpath

--------------------------------------------------

7. BEST PRACTICE FOR LOCATORS

Use:
cy.get('[data-testid="login-btn"]')

Benefits:
- Stable
- Easy to maintain
- Less flaky

--------------------------------------------------

8. COMMON CYPRESS COMMANDS

Open URL:
cy.visit()

Find Element:
cy.get()

Click:
.click()

Type Text:
.type()

Dropdown:
.select()

Checkbox:
.check()

--------------------------------------------------

9. ASSERTIONS

Visible Assertion:
.should('be.visible')

Text Validation:
.should('contain', 'Welcome')

URL Validation:
cy.url().should('include', 'dashboard')

--------------------------------------------------

10. HOOKS

before()
beforeEach()
after()
afterEach()

Example:

beforeEach(() => {
  cy.visit('https://example.com')
})

--------------------------------------------------

11. FIXTURES

login.json

{
  "username": "admin",
  "password": "admin123"
}

Usage:

cy.fixture('login').then((data) => {
  cy.get('#username').type(data.username)
})

--------------------------------------------------

12. API TESTING

cy.request('GET', 'https://reqres.in/api/users?page=2')
  .then((response) => {
    expect(response.status).to.eq(200)
  })

--------------------------------------------------

13. PAGE OBJECT MODEL (POM)

Benefits:
- Reusable code
- Easy maintenance
- Better framework structure

--------------------------------------------------

14. CYPRESS VS PLAYWRIGHT

Cypress:
- Beginner friendly
- Great frontend testing
- Easy debugging

Playwright:
- Better multi-tab support
- Better iframe support
- Better cross-browser support

--------------------------------------------------

15. ADVANTAGES OF CYPRESS

- Fast execution
- Easy setup
- Automatic wait
- Great debugging
- API testing support

--------------------------------------------------

16. LIMITATIONS OF CYPRESS

- Limited multi-tab support
- Limited iframe support
- Mainly JavaScript ecosystem

--------------------------------------------------

