import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import AccountPage from '../pages/AccountPage'

describe('User Signup Flow', () => {

    const homePage = new HomePage()
    const signupPage = new SignupPage()
    const accountPage = new AccountPage()

    let userData

    before(() => {
        cy.fixture('userData').then((data) => {
            userData = data
        })
    })

    it('should complete the signup process', () => {

        homePage.visitHomePage()

        homePage.verifyHomePageVisible()

        homePage.clickSignupLogin()

        signupPage.verifySignupVisible()

        signupPage.enterSignupDetails(
            userData.name,
            userData.email
        )

        signupPage.clickSignupButton()

        signupPage.verifyAccountInformationVisible()

        signupPage.fillAccountInformation(userData)

        signupPage.clickCreateAccount()

        accountPage.verifyAccountCreated()

        accountPage.clickContinue()

        accountPage.deleteButton()

        accountPage.deleteConfirmButton()

        homePage.verifyHomePageVisible()
    })
})