import {AuthenticationMethods} from './authentication/authentication.methods';
import {OutOfStockMethods} from './outOfStock/outOfStock.methods';

describe('template spec', () => {
    const authentication = new AuthenticationMethods();
    const outOfStock = new OutOfStockMethods();

    beforeEach(() => {
        //Visit the login page
        authentication.navigateToPage('https://juice-shop.herokuapp.com/#/login');

        // Log in with valid credentials
        authentication.login('admin@juice-sh.op', 'admin123');

        //Assert that we are successfully logged in  
        authentication.verifyUserSuccessfullyLogin();
    })

    afterEach(() => {
        //Logout
        authentication.logout();

        //Assert that we are successfully logged out 
        authentication.verifyUserSuccessfullyLogout();
    })

    it('search product that is out of stock and validate that it can not be added to the shopping cart with POM', () => {
         // Search for out-of-stock item
         // Assert that item is marked as out-of-stock
         outOfStock.searchItem('Facemask{enter}');
 
         // Attempt to add item to cart
         // Assert that error message is displayed
         outOfStock.addItemToCart();
    })
})