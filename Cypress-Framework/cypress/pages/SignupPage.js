class SignupPage {

    verifySignupVisible() {
        cy.contains('New User Signup!').should('be.visible')
    }

    enterSignupDetails(name, email) {
        cy.get('input[data-qa="signup-name"]').type(name)
        cy.get('input[data-qa="signup-email"]').type(email)
    }

    clickSignupButton() {
        cy.get('button[data-qa="signup-button"]').click()
    }

    verifyAccountInformationVisible() {
        cy.contains('Enter Account Information').should('be.visible')
    }

    fillAccountInformation(user) {

        cy.get('#id_gender1').check()

        cy.get('#password').type(user.password)

        cy.get('#days').select('1')
        cy.get('#months').select('January')
        cy.get('#years').select('1990')

        cy.get('#newsletter').check()
        cy.get('#optin').check()

        cy.get('#first_name').type(user.firstName)
        cy.get('#last_name').type(user.lastName)
        cy.get('#company').type(user.company)
        cy.get('#address1').type(user.address1)
        cy.get('#address2').type(user.address2)

        cy.get('#country').select('United States')

        cy.get('#state').type(user.state)
        cy.get('#city').type(user.city)
        cy.get('#zipcode').type(user.zipcode)
        cy.get('#mobile_number').type(user.mobile)
    }

    clickCreateAccount() {
        cy.get('button[data-qa="create-account"]').click()
    }
}

export default SignupPage