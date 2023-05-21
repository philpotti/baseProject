/// <reference types="Cypress" />

describe('9th Test Suite', function () {
  it('My 9th test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // cy.get('#opentab').click();
    // This will remove the attribute target and open the url in the same window
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'qaclickacademy');
    cy.go('back');
    //cy.go('forward');
  });
});
