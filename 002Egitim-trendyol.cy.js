/// <reference types = "Cypress" />
//support dosyası altında bulunan e2e'ye eklediğimiz şeyleri burada 
//import ettiğini görebiliriz
//Bu kısımda her websitesine girişte kontrol ettireceğimizden
//bu kısmı command kısmına da yazacağız. ve bir ön işlem gibi kullanıcaz
import { COUNTRY_SELECTION_CONFIRM, COUNTRY_SELECTION_DROPDOWN, COUNTRY_SELECTION_POPUP, SELECTION_COUNTRY_CODE } from "../../support/e2e";

describe("e2e test", ()=>{
    context.only("Country selection",()=>{
        it("should selecet a country",function(){ 
            cy.visit("https://www.trendyol.com/en/select-country?cb=/en");
            cy.get(COUNTRY_SELECTION_POPUP).should('be.visible');
            cy.get(COUNTRY_SELECTION_DROPDOWN).select("Belgium");
            cy.get(COUNTRY_SELECTION_CONFIRM).click();
            cy.get(SELECTION_COUNTRY_CODE).contains("BE");
        })
    });




})