/// <reference types="Cypress" />

describe('2nd Test Suite', function () {
  it('My second test case', function () {
    cy.visit('https://app-95fireplaster-stg.azurewebsites.net/login');
    cy.get('button.buttonLogin').click();

    cy.origin('https://launchpad.classlink.com/', () => {
      cy.get('.label-text').click();
    });
  });
});
