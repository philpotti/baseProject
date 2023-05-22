/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('13th Test Suite', function () {
  it('My 13th test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.frameLoaded('#courses-iframe');
    cy.iframe().find('li a[href*="mentorship"]').eq(0).click();

    cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2);
  });
});

