/// <reference types="Cypress" />

describe('6th Test Suite', function () {
  it('My 6th test case', function () {
    // cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.visit(Cypress.env('baseUrl') + '/AutomationPractice/');
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');
  });
});
