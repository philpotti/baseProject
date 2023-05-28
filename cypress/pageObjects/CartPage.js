class CartPage {
    cartCheckOutButton() {
        return cy.get('.btn-success');
    }
    totalAmountColumn() {
        return cy.get('tr td:nth-child(4) strong')
    }
    finalTotal() {
        return cy.get('h3 strong');
    }
}

export default CartPage;