/// <reference types = "Cypress" />
//bu testin çalışabilmesi için commands.js dosyasının altına bu kod olamıdır
/*
Cypress.Commands.add("loginapp",(email,password)=>{
    cy.get('.ico-login').click();
//verilen bilgileri yazıyoruz.
    cy.get('#Email').type(email);
    cy.get('#Password').type(password);
    cy.get('form > .buttons > .button-1').click();
})
*/

describe("Custom Commands",()=>{

//giriş yapmak için command yazacağız.    
    it("Login Command",()=>{
        cy.viewport(1200,660);
        cy.visit("https://demo.nopcommerce.com/");
        
//login için commmand kullandık. ve istenen değişkenleri gönderdik.         
        cy.loginapp("testing@gmail.com","test123"); 
    });
})