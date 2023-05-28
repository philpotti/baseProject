/// <reference types="Cypress" />

describe('11th Test Suite', function () {
  it('My 11th test case', function () {
    // cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.visit(Cypress.env('baseUrl') + '/AutomationPractice/');

    cy.get('#mousehover').invoke('show');
    cy.contains('Top').click({ force: true });
    cy.url().should('include', 'top');
  });
});
