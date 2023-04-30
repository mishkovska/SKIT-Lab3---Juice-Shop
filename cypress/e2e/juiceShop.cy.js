describe('juice shop app', () => {
    beforeEach(() => {
        //Visit the login page
        cy.visit('https://juice-shop.herokuapp.com/#/login')
        cy.get('#mat-dialog-0 > app-welcome-banner > div > div:nth-child(3) > button.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click();
        cy.get('body > div.cc-window.cc-floating.cc-type-info.cc-theme-classic.cc-bottom.cc-right.cc-color-override-1934802758 > div > a').click();

        // Log in with valid credentials
        cy.get('#email').type('admin@juice-sh.op');
        cy.get('#password').type('admin123');
        cy.get('#loginButton').click();

        //Assert that we are successfully logged in  
        cy.get('[aria-label="Show the shopping cart"]').should('exist');
    })

    afterEach(() => {
        //Logout
        cy.get('#navbarAccount').click();
        cy.get('#navbarLogoutButton').click();

        //Assert that we are successfully logged out 
        cy.get('[aria-label="Show the shopping cart"]').should('not.exist');
    })

    it('add and delete a product from the shopping cart', () => {
        // Add product to cart
        cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > div.ng-star-inserted > mat-grid-list > div > mat-grid-tile > div > mat-card > div:nth-child(2) > button').first().click();

        // Assert that the cart icon displays the correct number of items
        cy.get('.fa-layers-counter').should('have.text', '1')

        // Go to the cart page
        cy.get('[aria-label="Show the shopping cart"]').click();
        cy.url().should('include', '/basket')

        // Remove product from cart
        cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-basket > mat-card > app-purchase-basket > mat-table > mat-row > mat-cell.mat-cell.cdk-cell.cdk-column-remove.mat-column-remove.ng-star-inserted > button').click();

        // Assert that the cart is now empty
        cy.get('.fa-layers-counter').should('have.text', '0')
    })

    it ('search product that is out of stock and validate that it can not be added to the shopping cart', () => {
        // Search for out-of-stock item
        cy.get('#searchQuery').click();
        cy.get('#mat-input-0').type('Facemask{enter}');

        // Assert that item is marked as out-of-stock
        cy.get('.ribbon > span:nth-child(1)').should('have.text', 'Sold Out');

        // Attempt to add item to cart
        cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > div.ng-star-inserted > mat-grid-list > div > mat-grid-tile > div > mat-card > div:nth-child(3) > button').click();

        // Assert that error message is displayed
        cy.get('#cdk-overlay-2 > snack-bar-container > div:nth-child(1) > simple-snack-bar > span').should('have.text', 'We are out of stock! Sorry for the inconvenience.')
    })
})