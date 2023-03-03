/// <reference types = "Cypress" />

//go() & reload() web sayfasını yenileme ileri veri geri gitme

describe("Navigation Test", ()=>{
    
    it.only("Navigation test",()=>{ 
        
        cy.visit("https://demo.opencart.com/");      
        cy.get(':nth-child(7) > .nav-link').click();
//başlığı kontrol ettik camera sayfasında mıyız diye.        
        cy.get('.breadcrumb > :nth-child(2) > a')
        .should("have.text","Cameras");
 
        cy.go('back'); // önceki sayfaya geldik.
        cy.go("forward"); //sonraki sayfaya gittik
        cy.get('.breadcrumb > :nth-child(2) > a')
        .should("have.text","Cameras");
//geri için -1  ve ileri için 1 de yazabiliriz.        
        cy.go(-1) 
        cy.reload() //böylede sayfayı yeniledik
    })    
})
