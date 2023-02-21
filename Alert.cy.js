/// <reference types = "Cypress" />

/*
4 çeşit uyarı ile ilgileneceğiz.
Alert(uyarı), "ok" butonu var
confrim alert (onaylamalı uyarı), "ok" ve "cancel" buton var
prompt alert(hızlı uyarı), text ve textbox var 
authenticated alert(kimliği doğrulanmış uyarı ) 
*/

//Burada web sitesinde alert'i görmneyeceğiz çünkü cypress
//onu handle ediyor ve soldaki timeline'da bunu görebiliyoruz.
//Yani çıkan o uyarıyı kapatmak için bir şey yapmamıza gerek kalmıyor.

//Burada alerts(uyarılar) işlemleri yapıcaz
describe("Alerts ", ()=>{
    it.skip("Normal alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
//burada bir event olduğu için eventi tırnak içinde '' yazmalıyız.       
        cy.get("button[onclick= 'jsAlert()']").click()


//burada şunu yaptık cypress web sitesinden bu alert hangi event
//adı ile isimlendirildiyse ona baktık ve sonra dedik ki bu alerti
// aldık ve dedik bu uyarı mesajı bunu içeriyor mu.  
        cy.on("window:alert",(t)=>{
            expect(t).to.contain('I am a JS Alert')
        })

//yada web sitesinde bulunan ekranda sonucu döndüren kısımdan da 
//bu işlemin başarılı olduğunu teyit edebiliriz        
        cy.get("[id=result]")
        .should("have.text","You successfully clicked an alert")
    })

//--------------------------------------------------------------- 

//Confrim alert burada ise ok butonu ile işlem yapabiliyoruz.   
    it.skip("Confrim alert ok button",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick= 'jsConfirm()']").click()
       
        cy.on("window:alert",(t)=>{
            expect(t).to.contain('I am a JS Alert')
        })

//cypress default olarak ok butonuna basarak alert'i kapatır        
        cy.get("[id=result]").should("have.text","You clicked: Ok")

    })

//burada ise cancel butonu ile işlem yapabiliyoruz.   
    it.skip("Confrim alert cancel button",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick= 'jsConfirm()']").click()
       
        cy.on("window:confirm",(t)=>{
            expect(t).to.contain('I am a JS Confirm')
        })

//cypress'in alert'i cancel ile kapatmasını sağladık.        
        cy.on("window:confirm",()=> false)      
        cy.get("[id=result]").should("have.text","You clicked: Cancel")
    })    

//-------------------------------------------------------------------

//authenticated alert(kimliği doğrulanmış uyarı)
    it("Authenticated alert",()=>{
//burada siteye girdikten sonra kullanıcı adı ve şifreyi biz giriyoruz
//Sonra açılan sayfada işte şu mesaj var mı diye kontrol ediyoruz.
        cy.visit("https://the-internet.herokuapp.com/basic_auth",
            {auth:{
                username:"admin",
                password: "admin"
            }}
        )
        cy.get("div[class=example] p")
        .should("have.contain","Congratulations!")
    })    
})