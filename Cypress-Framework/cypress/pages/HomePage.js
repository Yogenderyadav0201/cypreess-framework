require('cypress-xpath')

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

    countProduct() {
        cy.xpath('//div[@class="features_items"]//div[@class="col-sm-4"]').should('have.length', 34);
    }

    hoverTheProduct(){
        cy.scrollTo(0, 900);
        cy.scrollTo(0, 900, { duration: 1000 });
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo').trigger('mouseover');;
    }

    clickAddProduct(){
        cy.contains("//div[@class='features_items']//div[2]//div[1]//div[1]//div[2]//div[1]//a[1]").click()
    }

}

export default HomePage 