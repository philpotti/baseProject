class ProductsPage {

    productsList() {
        return cy.get('h4.card-title');
    }
    addProductButton() {
        return cy.get('button.btn.btn-info');
    }
    checkOutButton() {
        return cy.get('.btn-primary');
    }
}

export default ProductsPage;