/// <reference types = "Cypress" />

//Burada dropdown listelerde işlemler yapıcaz
describe("DropDowns", ()=>{

//dropdown listeden eleman seçme işlemini yaptık    
    it.skip("Dropdown with select",()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")     

//dropdown listeden id yardımı ile bir element seçtik ve sonrasında seçilen
//elemanın istediğimiz eleman mı olduğunu sorguladık        
        cy.get("select[id=zcf_address_country]")
        .select("Canada")
        .should("have.value","Canada")
    })


    it("Dropdown without select",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")     
//Burada dropdown listesini bulma işlemini yapıyoruz.        
        cy.get("[id=select2-billing_country-container]").click()
//Burada bulunan o containerde seç ve enter tuşuna bas 
        cy.get(".select2-search__field")
        .type("canada{enter}")
//bu kısımda ise orada Canada adında bir değer var mı ona bakıyoruz
/* bu kontrol etme kısmında bir sıkıntı oldu. Sonra bakıcaz.        
        cy.get("[class=selectselection__rendered]")
        .should("have.text","Canada")
*/
  

    })


})
