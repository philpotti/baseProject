/// <reference types="Cypress" />

describe('12th Test Suite', function () {
  it('My 12th test case', function () {
    // cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.visit(Cypress.env('baseUrl') + '/AutomationPractice/');
    cy.get('#openwindow').invoke('removeAttr', 'onclick').click();

    cy.visit('http://www.qaclickacademy.com/');
    cy.origin('http://www.qaclickacademy.com/', () => {
      cy.get('ul.navbar-nav a[href*="contactus"]').click();
      cy.get('div h2').should('contain', 'Contact')
    });

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

  });
});

