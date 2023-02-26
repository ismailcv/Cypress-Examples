/// <reference types = "Cypress" />

describe("Mouse Operations ", ()=>{
    
//Mosue hover (Fareyi nesnenin üstüne getirme) drop down menü açılıyor.    
    it("Mouse Hover",()=>{
        cy.visit("https://demo.opencart.com/")
//burada mouse'ı nesnenin üstüne getirdik ve tıklama işlemini yaptık.        
        cy.get('.nav > :nth-child(1) > .dropdown-toggle')
        .trigger("mouseover").click()
//burada da açılan 2. drop down menüden 2. item'ı seçtik
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should("be.visible").click()
    })
    
//************************************************    
    it.only("Right Click",()=>{
        
    })

//*************************************************** */

    it("Double Click",()=>{
    
    })

//******************************************************** */    
    it("Drag and Drop using plugin",()=>{
    
    })

//******************************************************** */
    it("Scrolling Page",()=>{
    
    })
})