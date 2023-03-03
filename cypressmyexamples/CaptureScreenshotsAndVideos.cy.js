/// <reference types = "Cypress" />

//Test aşamasında hata olursa bu hatanın ne olduğunun ekran görüntüsünü alırız
describe("Screen shots and videos",()=>{
      
    it("Screen shots and videos",()=>{  
        cy.visit("https://demo.opencart.com/");
//sayfayı aşşağı kaydırarak sayfanın tamamının ekran görüntüsünü alır.
//bu şekilde isim de verebiliriz.        
        cy.screenshot("homepage");    
//bir süre koymamız lazı yoksa direk ekran görüntüsünü alır        
        cy.wait(5000); 
//isteserk direk bir element'in de ekran görüntüsünü alabiliriz.        
        cy.get('.col-12 > a > .img-fluid').screenshot("menü foto");
    });


//npx cypress run --spec dosya yolu deyip terminalde çalıştırırsak
//hata olduğunda hata olan kısmın videosunu ve ekran görüntüsünü alır

//hata olduğununda otomatik olarak ekran görüntüsü ve video alma
    it.only("Screen shots and videos",()=>{
        cy.visit("https://demo.opencart.com/");
        cy.get(':nth-child(7) > .nav-link').click();
//burada yanlış sonuç verecek bir assertions(iddia) vereceğiz.
//normalde burada Cameras yazması gerekiyor biz tablet mi diye bakıcaz.
        cy.get('h2').should("have.text","Talbets");        

    });    
});