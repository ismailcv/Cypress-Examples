/// <reference types = "Cypress" />

describe("Iframe Handling", ()=>{
    it("Approach1",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
//selector kullanmadan direk aldığımız için yani direk değişkeni aldığımız için
// # işareti koyarak devam edebiliriz.
//burada bu iframe'i aldık ve onu iframe adlı bir değişkene atadık
        const iframe = cy.get("#mce_0_ifr")
        .its("0.contentDocument.body")
        .should('be.visible')
        .then(cy.wrap)
//Çoklu iframe kullanmamız gerekirse yukarıda ki gibi istediğimiz kadar
//iframe oluşturabiliriz
        
        cy.wait(500)
//burada yazıyı bold şekilde yazdırıyoruz        
        cy.get("button[aria-label=Bold]").click() 
        
//Bu kısımda iframe'i temizleyip içine hoşgeldin yazıyorum.        
        iframe.clear().type("Hoşgeldin")    
    })
    
})