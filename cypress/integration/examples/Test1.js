/// <reference types="Cypress" />

describe('1st Test Suite', function () {
  it('My first test case', function () {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(1500);

    cy.get('.product:visible').should('have.length', 4);
    cy.get('.product').should('have.length', 5);

    //Parent child chaining
    cy.get('.products').as('productsLocator');
    cy.get('@productsLocator').find('.product').should('have.length', 4);
    //cy.get(':nth-child(2) > .product-action > button').click();
    cy.get('@productsLocator')
      .find('.product')
      .eq(1)
      .contains('ADD TO CART')
      .click()
      .then(function () {
        console.log('sf');
      });

    cy.get('@productsLocator')
      .find('.product')
      .each(($el, index, $list) => {
        const vegText = $el.find('h4.product-name').text();
        if (vegText.includes('Cashews')) {
          cy.wrap($el).find('button').click();
        }
      });

    //Assert if logo text is correctly displayed
    cy.get('.brand.greenLogo').should('have.text', 'GREENKART');

    //This is to print in logs
    cy.get('.brand.greenLogo').then(function (logoelement) {
      cy.log(logoelement.text());
    });
  });
});
