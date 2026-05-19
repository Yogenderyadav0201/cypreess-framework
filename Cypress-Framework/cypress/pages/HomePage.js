class HomePage {

    visitHomePage() {
        cy.visit('https://automationexercise.com')
    }

    verifyHomePageVisible() {
        cy.contains('Home').should('be.visible')
    }

    clickSignupLogin() {
        cy.contains('Signup / Login').click()
    }

}

export default HomePage