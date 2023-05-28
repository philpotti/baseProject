class DeliveryLocationPage {
    autoSuggestiveDropDownBtn() {
        return cy.get('#country');
    }
    indiaCountryLocator() {
        return cy.get('.suggestions > ul > li > a');
    }
    termsAndConditionsCheckbox() {
        return cy.get('#checkbox2');
    }
    purchaseButton() {
        return cy.get('input[type*="submit"]');
    }
    successMessageLocator() {
        return cy.get('div[class*="alert"]');
    }
}

export default DeliveryLocationPage;