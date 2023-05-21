/// <reference types="Cypress" />

describe('2nd Test Suite', function () {
  it('My 2nd test case', function () {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(1500);

    //Parent child chaining
    cy.get('.products').as('productsLocator');
    cy.get('@productsLocator')
      .find('.product')
      .each(($el, index, $list) => {
        const vegText = $el.find('h4.product-name').text();
        if (vegText.includes('Cashews')) {
          cy.wrap($el).find('button').click();
        }
      });
    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.contains('Place Order').click();
  });
});
