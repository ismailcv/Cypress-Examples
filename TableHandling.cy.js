/// <reference types = "Cypress" />

/*
Bu kısımda bir tabloda ki satır ve sütun sayısını öğreneceğiz
İstediğimiz satır ve sütundaki veriye erişmeyi öğreneceğiz
Tüm satır ve sütunlardaki verileri okumayı göreceğiz
Pagination(sayfalandırmayı) göreceğiz
*/

describe("Table Handling ", ()=>{

//bu kısım her it bloğundan önce çalışacak be table kısmına gideceğiz    
    beforeEach('Login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("input[name=username]").type("demo")
        cy.get("input[name=password]").type("demo")
        cy.get("button[class='btn btn-primary']").click()
//burada şunu yaptık sayfayı açtığımızda bir pop-up çıkıyordu
//eğer bu pop-up karşımıza çıkarsa onu kapat dedik      
        cy.get("div[class=modal-dialog]")
        .should("be.visible")
        .get("button[class=btn-close]").click()
//burada sayfa boyutunu değiştirdim çünkü yazılar iç içe giriyor sitede     
        cy.viewport(1360,800)
//burada ana menüden customer menüsüne tıklayıp oradan customer'ı seçtik
        cy.get("li[id=menu-customer]").click()
        cy.get("#menu-customer>ul>li:first-child").click()
    })

//*************************************************** 

//Bu kısımda bir tabloda ki satır ve sütun sayısını öğreneceğiz
    it("Check number rows & columns",()=>{
    
    
    })

//*************************************************** 

//İstediğimiz satır ve sütundaki veriye erişmeyi öğreneceğiz    
    it("Check cell data from specific rows & column",()=>{
    
    
    })

//***************************************************     

//Tüm satır ve sütunlardaki verileri okumayı göreceğiz    
    it("Read all the rows & columns data in the first page",()=>{
    
    
    })

//***************************************************     

//Pagination(sayfalandırmayı) göreceğiz    
    it("Pagination (Sayfalandırma)",()=>{
    
    
    })

})