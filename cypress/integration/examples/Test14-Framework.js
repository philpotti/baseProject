/// <reference types="Cypress" />
import { home } from "ospath";
import HomePage from "../../pageObjects/HomePage";
import CartPage from "../../pageObjects/CartPage";
import ProductsPage from "../../pageObjects/ProductsPage";
import DeliveryLocationPage from "../../pageObjects/DeliveryLocationPage";

describe('14th Test Suite', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })

    it('My 14th test case', function () {

        const homePage = new HomePage();
        const productsPage = new ProductsPage();
        const cartPage = new CartPage();
        const deliveryPage = new DeliveryLocationPage();

        cy.visit(Cypress.env('baseUrl') + '/angularpractice/');

        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneur().should('be.disabled');
        // Pause to debug
        //cy.pause();
        homePage.getShopTab().click();

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });
        productsPage.checkOutButton().click();

        let sum = 0;
        cartPage.totalAmountColumn().each((element) => {
            const amount = element.text();
            var res = amount.split(' ');
            res = res[1].trim();
            sum = Number(sum) + Number(res);
        }).then(function () {
            cy.log(sum);
        });
        cartPage.finalTotal().then(function (element) {

            const amount = element.text();
            var res = amount.split(' ');
            var total = res[1].trim();
            expect(Number(total)).to.equal(sum);
        });

        cartPage.cartCheckOutButton().click();
        // cy.pause();

        deliveryPage.autoSuggestiveDropDownBtn().type('India');
        Cypress.config('defaultCommandTimeout', 8000); //Set timeout for 1 specific Test Case
        deliveryPage.indiaCountryLocator().click();
        deliveryPage.termsAndConditionsCheckbox().check({ force: true });
        deliveryPage.termsAndConditionsCheckbox().should('be.checked');
        deliveryPage.purchaseButton().click();
        //deliveryPage.successMessageLocator().should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).') FAILED BECAUSE TEXT WAS NOT PRECISE
        deliveryPage.successMessageLocator().then(function (element) {
            const successText = element.text();
            expect(successText.includes('Success')).to.be.true;
        });
    });
});