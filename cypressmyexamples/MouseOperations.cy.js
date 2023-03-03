/// <reference types = "Cypress" />

//bunu drag and drop kullandığımız için koda dahil ettik.
require('@4tw/cypress-drag-drop')

describe("Mouse Operations ", ()=>{
    
//Mosue hover (Fareyi nesnenin üstüne getirme) drop down menü açılıyor.    
    it("Mouse Hover",()=>{
        cy.visit("https://demo.opencart.com/");
//burada mouse'ı nesnenin üstüne getirdik ve tıklama işlemini yaptık.        
        cy.get('.nav > :nth-child(1) > .dropdown-toggle')
        .trigger("mouseover").click();
//burada da açılan 2. drop down menüden 2. item'ı seçtik
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should("be.visible").click();
    })
    
//************************************************    
//2 şekilde işlem yapabiliriz. 1.si mouse trigger right click eventile 
//2. direk right click mouse event var onla    
    it("Right Click",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
//1. yontem. Mouse event ile trigger(tetikleme)        
/*      cy.get('.context-menu-one').trigger("contextmenu");
        cy.get('.context-menu-icon-copy > span')
        .should("be.visible").click();
*/
//2. yöntem elemanı alıp direk rightclick demek        
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-icon-cut > span')
        .should("be.visible").click();   
    })

//*************************************************** */

    it("Double Click",()=>{
        cy.visit("https://demo.guru99.com/test/simple_context_menu.html");
        cy.get('button').dblclick();
    })

//******************************************************** */    
    it("Drag and Drop using plugin",()=>{
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
//bu işlemi görebilmek için birazcık süre koyduk.        
        cy.wait(3000);
//drag deyip içine yazdığımız elementin üstüne koyuyor.
//Force dedik çünkü bazen gözükmeyebilir dedi. Bu sayede gözükmese bile koyucaz.        
        cy.get('#box6').drag('#box106',{force:true});
    })

//******************************************************** */
    it.only("Scrolling Page",()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
//bu şekilde aşşağı indirdik ve süre de verdik ki görebilelim. Süreye gerek yok.        
        cy.get(':nth-child(2) > tbody > :nth-child(88) > :nth-child(1) > img')
        .scrollIntoView({duration:2000});
        cy.get(':nth-child(2) > tbody > :nth-child(88) > :nth-child(1) > img')
        .should("be.visible");
        cy.wait(500)
        cy.get(':nth-child(1) > tbody > :nth-child(12) > :nth-child(1) > img')
        .scrollIntoView({duration:2000});
//sayfanın en altında bulunan footer kısmınada böyle gidebiliriz.
        cy.get('#footer').scrollIntoView({duration:2000});       
        
    })
})