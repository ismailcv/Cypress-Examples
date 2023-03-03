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
//buradaki ">" kısmı önemli yani customer'a git sonra buna gir sonra 
//buna git demek. Bu sayede istediğimiz değişkene kadar gidebiliyoruz
        cy.get("#menu-customer>ul>li:first-child").click()
    })

//*************************************************** 

//Bu kısımda bir tabloda ki satır ve sütun sayısını öğreneceğiz
    it.skip("Check number rows & columns",()=>{ 

//önce rows(satır) sayısını bulacağız
//burada satır sayısının 10 olduğunu bildiğimiz için 10'a eşit olmalı dedik
//ve satır sayısına ulaşmak için gerekli kısmı yazdık       
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .should("have.length",'10')

//columns sütun sayısını bulacağız.
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td")
        .should("have.length",'7')
    })

//*************************************************** 

//İstediğimiz satır ve sütundaki veriye erişmeyi öğreneceğiz    
    it.skip("Check cell data from specific rows & column",()=>{
//5 satırdaki 3. veriye ulaşmak istersek böyle bir yol izlemeliyiz.
//buna daha sonra yine bakarı biraz uzun gibi geldi bana
cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("princytrainings4@gmail.com")    
    })

//***************************************************     

//Tüm satır ve sütunlardaki verileri okumayı göreceğiz    
    it("Read all the rows & columns data in the first page",()=>{
//biz burada fonksiyon oluşturucaz. Buradaki "rows" satırlardaki bilgileri temsil edecek
//index satırların index'ini temsil edecek. "row" bu ise bulunduğumuz satırı temsil edecek
//bunu tüm verileri almak için kullancıcaz ve each kullanıcaz. Birkaç fonksiyon oluşturucaz
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{//wrap seçilen öğenin komple seçmek demek
                    cy.get("td").each(($col, index, $cols)=>{//tüm sutünlardaki bilgileri aldık
                        cy.log($col.text()) //burada tüm bilgileri soldaki ekrana yazdırdık
                    })
                })
            })
    
    })

//***************************************************     

//Pagination(sayfalandırmayı) göreceğiz    
    it("Pagination (Sayfalandırma)",()=>{
    
    
    })

})