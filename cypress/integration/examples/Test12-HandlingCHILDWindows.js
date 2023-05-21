/// <reference types="Cypress" />

describe('2nd Test Suite', function () {
  it('My second test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#openwindow').invoke('removeAttr', 'onclick').click();

    cy.visit('http://www.qaclickacademy.com/');
    cy.origin('http://www.qaclickacademy.com/', () => {
      cy.get('ul.navbar-nav a[href*="contactus"]').click();
      cy.get('div h2').should('contain', 'Contact')
    });

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

  });
});

