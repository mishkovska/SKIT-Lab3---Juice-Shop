export class AuthenticationElements {
    static getBtnShoppingBasket() {
        return cy.get('[aria-label="Show the shopping cart"]')
    }

    static get LoginElement() {
        return{
            getBtnCloseDialog: () => cy.get('#mat-dialog-0 > app-welcome-banner > div > div:nth-child(3) > button.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted'),
            getBtnCookies: () => cy.get('body > div.cc-window.cc-floating.cc-type-info.cc-theme-classic.cc-bottom.cc-right.cc-color-override-1934802758 > div > a'),
            getTxtEmail: () => cy.get('#email'),
            getTxtPassword: () => cy.get('#password'),
            getBtnLogin: () => cy.get('#loginButton'),
            getBtnShoppingBasket: () => AuthenticationElements.getBtnShoppingBasket()
        }
    }

    static get LogoutElement() {
        return {
            getBtnAccount: () => cy.get('#navbarAccount'),
            getBtnLogout: () => cy.get('#navbarLogoutButton'),
            getBtnShoppingBasket: () => AuthenticationElements.getBtnShoppingBasket()
        }
    }
}