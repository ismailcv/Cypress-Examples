//bu alt kısmın amacı bunun cy. koyduğumuzda cypress'i kullandığımızı anlaması
/// <reference types = "Cypress" />

describe("SauceDemo login", ()=>{
 
//sayfayı ziyaret ettik ve sayfa başlığı bu olmak zorunda dedik    
    it("Test Case 001 - Sauce demo login page",()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('eq','Swag Labs');
    })
/*   
    it("Test Case 002 - Sauce login",()=>{
        cy.get('input[name = "user-name"]')
        .type('standard_user');
        cy.get('input[name ="password"]')
        .type('secret_sauce');
        cy.get().click();

    })
*/


})