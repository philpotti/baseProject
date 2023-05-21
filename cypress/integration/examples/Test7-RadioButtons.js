/// <reference types="Cypress" />

describe('7th Test Suite', function () {
  it('My 7th test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('input[value="radio1"]').check().should('be.checked');
  });
});
