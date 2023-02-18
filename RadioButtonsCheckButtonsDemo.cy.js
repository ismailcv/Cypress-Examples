/// <reference types = "Cypress" />

//burada radio buton ve check buton ile ilgili örnek yapıyoruz.
describe("Chech UI Elements", ()=>{

    beforeEach(()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    })

    it("Radio Button",()=>{

//be yani behavior(davranış) demek. 
        cy.get("input[id=female]").should("be.visible").click()
        cy.get("input[id=male]").should("be.visible").click()

//Burada butonun seçmek için click ya da check diyebiliriz
        cy.get("input[id=female]").check().should("be.checked")
        cy.get("input[id=male]").should("not.be.checked")
    })

    it("Check Button",()=>{
 
//Check butonların görünürlüğünü kontrol ediyoruz.        
        cy.get("input[id=monday]").should("be.visible")
        cy.get("input[id=tuesday]").should("be.visible")
        cy.get("input[id=wednesday]").should("be.visible")
        cy.get("input[id=thursday]").should("be.visible")
        cy.get("input[id=friday]").should("be.visible")
        cy.get("input[id=saturday]").should("be.visible")
        cy.get("input[id=sunday]").should("be.visible")

//Butonu seçili hale getiriyoruz.
        cy.get("input[id=monday]").check().should("be.checked")
//Butonu seçili halden çıkartıyoruz.
        cy.get("input[id=monday]").uncheck().should("not.be.checked")
//Tüm butonları seçme işlemi
        cy.get("input.form-check-input[type=checkbox]").check()
        .should("be.checked")        
//istersek sadece ilk veya son butonu da seçili hale getirebiliriz        
        cy.get("input.form-check-input[type=checkbox]").first().uncheck()
        cy.get("input.form-check-input[type=checkbox]").last().uncheck()



    
    })
})