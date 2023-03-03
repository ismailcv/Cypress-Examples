/// <reference types = "Cypress" />
//Ben bunu editör için kullanabilirim. Orada child web sitesine geçme
//olayı var.

describe("Child Window or Child Tabs", ()=>{ 
    it("Child Window",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
//burada target'i sileceğiz ki aynı web sayfasında işlem yapabileceğiz
//invoke(çağırmak) deyip içinde removeAttribute yani o elementi sil
//diyoruz. Bu sayede aynı sayfada işlem yapabiliyoruz.
        cy.get("[href='/windows/new']")
        .invoke("removeAttr","target").click()

//sonrada açılan pencerenin child tab'a geçtik mi bakabiliriz.
        cy.url().should("include","https://the-internet.herokuapp.com/windows/new")        

//sonrasında önceki sayfaya aşşağıda ki kommut ile dönebiliriz. Yani parent'a    
        cy.wait(1000)
        cy.go("back") //back to parent tab 
    })
})