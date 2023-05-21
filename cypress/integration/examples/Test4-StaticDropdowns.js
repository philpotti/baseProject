/// <reference types="Cypress" />

describe('4th Test Suite', function () {
  it('My 4th test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('select').select('option2').should('have.value', 'option2');
  });
});
