import { OutOfStock } from "./outOfStock.elements";

export class OutOfStockMethods {
    searchItem(text:string) {
        OutOfStock.SearchItemElement.getSearchIcon().click();
        OutOfStock.SearchItemElement.getInput().type(text);
        OutOfStock.SearchItemElement.getSoldOutRibbon().should('have.text', 'Sold Out');
    }
    addItemToCart() {
        OutOfStock.AddItemElement.getAddButton().click();
        OutOfStock.AddItemElement.getMessage().should('have.text', 'We are out of stock! Sorry for the inconvenience.');
    }
}