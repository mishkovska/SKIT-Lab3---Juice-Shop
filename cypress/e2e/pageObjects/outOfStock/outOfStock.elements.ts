export class OutOfStock {
    static get SearchItemElement(){
        return{
            getSearchIcon: () => cy.get('#searchQuery'),
            getInput: () => cy.get('#mat-input-0'),
            getSoldOutRibbon: () => cy.get('.ribbon > span:nth-child(1)')
        }
    }

    static get AddItemElement() {
        return{
            getAddButton: () => cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-search-result > div > div > div.ng-star-inserted > mat-grid-list > div > mat-grid-tile > div > mat-card > div:nth-child(3) > button'),
            getMessage: () => cy.get('#cdk-overlay-2 > snack-bar-container > div:nth-child(1) > simple-snack-bar > span')
        }
    }
}