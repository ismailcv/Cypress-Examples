/// <reference types = "Cypress" />

describe("Racoon eğitim kanalı videosu", ()=>{

    beforeEach(()=>{
        cy.visit("https://www.trendyol.com/");
    });


    context.only("Login olmayan kullanıcı ile alakalı giriş",()=>{
        it("Web sitesinin başlığı uyumulu olmalı",()=>{ 
            cy.title().should("include","Trendyol");
        })
    });

    context("Login olan kullanıcı ile alakalı giriş",()=>{
        it("Web sitesinin başlığı uyumulu olmalı",()=>{
            cy.title().should("include","Trendyol");
        })
    });



})