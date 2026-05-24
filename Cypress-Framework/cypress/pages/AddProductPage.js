class ProductPage {
    
    // Locators
    elements = {
        homeLogo: () => cy.get('.logo img'),
        productsMenuBtn: () => cy.get('a[href="/products"]'),
        productCards: () => cy.get('.single-products'),
        addToCartBtn1: () => cy.get('.productinfo a[data-product-id="1"]').first(),
        addToCartBtn2: () => cy.get('.productinfo a[data-product-id="2"]').first(),
        continueShoppingBtn: () => cy.get('.modal-footer > .btn'),
        viewCartLink: () => cy.get('u').contains('View Cart'),
        cartRows: () => cy.get('#cart_info_table tbody tr'),
        productPrice: (id) => cy.get(`#product-${id} .cart_price p`),
        productQuantity: (id) => cy.get(`#product-${id} .cart_quantity button`),
        productTotalPrice: (id) => cy.get(`#product-${id} .cart_total p`)
    }



    clickProductsButton() {
        this.elements.productsMenuBtn().click();
    }


    addFirstProductToCart() {
        this.elements.productCards().first().trigger('mouseover');
        this.elements.addToCartBtn1().click({ force: true });
    }


    clickContinueShopping() {
        this.elements.continueShoppingBtn().should('be.visible').click();
    }

    addSecondProductToCart() {
        this.elements.productCards().eq(1).trigger('mouseover');
        this.elements.addToCartBtn2().click({ force: true });
    }

    
    clickViewCart() {
        this.elements.viewCartLink().click();
    }

    
    verifyProductsInCart() {
        this.elements.cartRows().should('have.length', 2);
    }

    
    verifyCartDetails() {
        
        this.elements.productPrice('1').should('contain', 'Rs. 500');
        this.elements.productQuantity('1').should('have.text', '1');
        this.elements.productTotalPrice('1').should('contain', 'Rs. 500');
        this.elements.productPrice('2').should('contain', 'Rs. 400');
        this.elements.productQuantity('2').should('have.text', '1');
        this.elements.productTotalPrice('2').should('contain', 'Rs. 400');
    }
}

export default ProductPage;