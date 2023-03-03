//Bu kısımıda locators(buluculara) bakıcaz.

describe('CSSLocators', ()=>{

    it("cssLocators",()=>{
        cy.visit('https://www.vatanbilgisayar.com/');
        
//buradaki type o inputa şunu yaz demek
//allta aynı elemente hem id hem class ile eriştik
//cy.get('input[class=search__input]').type("msi") // class
//buradaki input bir tag'dir yani etiket.bunu koymasak da olur

        cy.get('input[name=search]').type("msi") //id
        cy.get('button[class=search__button]').click
    });
})