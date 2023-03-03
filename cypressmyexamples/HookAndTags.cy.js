/// <reference types = "Cypress" />

//hooks: testlerin önce veya sonra yapmak istediğimiz şeylerde kullanılıyor 
//before, after, beforeEach, afterEach
//Before ve after 1 kere çalışır. Diğerleri her it bloğunda çalışır
//bunlar mocha framework'ünden gelir bu özellikler.

//Tags: İstediğimiz it bloklarının koşturulmasını ya da koşturulmamasını sağlıyor
//only, skip, 

describe("HooksAndTags", ()=>{

//en başta hepsi için 1 kere çalışıyor.    
    before(()=>{
        cy.log("***  LAUNCH APP  ***");
    });

    after(()=>{
        cy.log("***  CLOSE APP  ***");
    });

    beforeEach(()=>{
        cy.log("***  LOGIN  ***");
    });

    afterEach(()=>{
        cy.log("***  LOGOUT  ***");
    });

    it.skip('Search',()=>{
//soldaki Run detail page kısmına yazı yazarız        
        cy.log("***  SEARCHING  ***");
    })

//************************************************* */

    it.only('Advanced Search',()=>{
        cy.log("***  ADVENCED SEARCHING  ***"); 
    })

//************************************************* */

    it('Listing Products',()=>{
        cy.log("***   LISTING SEARCHING  ***");  
    })
})