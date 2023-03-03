/// <reference types = "Cypress" />

//fixtures kısmında kullandığımız dosyayı import etmeliyiz.
import data from '../fixtures/orangehrm.json'

describe("Fixture Example", ()=>{
    
    it.only("Fixtures Demo Test 1",()=>{ 
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");      
//kullanıcı adını aldık ve girdik.        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type(data.username);
//şifreyi fixture kısmından aldık ve kullandık.      
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type(data.password);
        cy.get('.oxd-button').click();
//açılan sayfanın dashborad oluğ olamdığını kontrol ettik.
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
        .should("have.text", data.expected);
    })    
})