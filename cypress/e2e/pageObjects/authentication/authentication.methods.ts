import { AuthenticationElements } from "./authentication.elements";

export class AuthenticationMethods {
    navigateToPage(page: string){
        cy.visit(page);
        AuthenticationElements.LoginElement.getBtnCloseDialog().click();
        AuthenticationElements.LoginElement.getBtnCookies().click();
    }
    login(email:string, password:string){
        AuthenticationElements.LoginElement.getTxtEmail().type(email);
        AuthenticationElements.LoginElement.getTxtPassword().type(password);
        AuthenticationElements.LoginElement.getBtnLogin().click();
    }
    verifyUserSuccessfullyLogin(){
        AuthenticationElements.LoginElement.getBtnShoppingBasket().should('exist');
    }
    logout(){
        AuthenticationElements.LogoutElement.getBtnAccount().click();
        AuthenticationElements.LogoutElement.getBtnLogout().click();
    }
    verifyUserSuccessfullyLogout(){
        AuthenticationElements.LogoutElement.getBtnShoppingBasket().should('not.exist');
    }
}