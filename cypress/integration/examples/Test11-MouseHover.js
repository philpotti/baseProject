/// <reference types="Cypress" />

describe('2nd Test Suite', function () {
  it('My second test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#mousehover').invoke('show');
    cy.contains('Top').click({ force: true });
    cy.url().should('include', 'top');
  });
});
