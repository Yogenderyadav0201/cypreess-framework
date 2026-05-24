import ProductPage from '../pages/AddProductPage';
import HomePage from '../pages/HomePage'

describe('Automation Exercise - End to End Cart Workflow', () => {
    const productPage = new ProductPage();
    const homePage = new HomePage()

    it('should successfully add items to cart and verify calculations', () => {
        homePage.visitHomePage()

        homePage.verifyHomePageVisible()
        
        productPage.clickProductsButton();

        productPage.addFirstProductToCart();

        productPage.clickContinueShopping();

        productPage.addSecondProductToCart();

        productPage.clickViewCart();

        productPage.verifyProductsInCart();

        productPage.verifyCartDetails();
    });
});