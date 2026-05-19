class AccountPage {

    verifyAccountCreated() {
        cy.contains('Account Created!').should('be.visible')
    }

    clickContinue() {
        cy.contains('Continue').click()
    }

    deleteButton(){
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    }

    deleteConfirmButton(){
        cy.get('[data-qa="continue-button"]').click()
    }
}

export default AccountPage