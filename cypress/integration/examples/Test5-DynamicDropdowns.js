/// <reference types="Cypress" />

describe('2nd Test Suite', function () {
  it('My second test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#autocomplete').type('ind');
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if ($el.text() === 'India') {
        cy.wrap($el).click();
      }
    });
    cy.get('#autocomplete').should('have.value', 'India');
  });
});
