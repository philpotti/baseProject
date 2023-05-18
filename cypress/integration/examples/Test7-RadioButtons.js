/// <reference types="Cypress" />

describe('2nd Test Suite', function () {
  it('My second test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('input[value="radio1"]').check().should('be.checked');
  });
});
