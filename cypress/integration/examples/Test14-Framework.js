/// <reference types="Cypress" />
import { home } from "ospath";
import HomePage from "../../pageObjects/HomePage";
import ProductsPage from "../../pageObjects/ProductsPage";

describe('14th Test Suite', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })

    it('My 14th test case', function () {
        const homePage = new HomePage();
        const productsPage = new ProductsPage();

        cy.visit("https://www.rahulshettyacademy.com/angularpractice/")

        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneur().should('be.disabled');
        // Pause to debug
        cy.pause();
        homePage.getShopTab().click();

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });
        productsPage.checkOutButton().click();
    });
});