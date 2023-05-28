/// <reference types="Cypress" />

describe('10th Test Suite', function () {
  it('My 10th test case', function () {
    // cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.visit(Cypress.env('baseUrl') + '/AutomationPractice/');
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
      const courseText = $el.text();
      if (courseText.includes('Python')) {
        cy.get('tr td:nth-child(2)')
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            expect(priceText).to.equal('25');
          });
      }
    });
  });
});
