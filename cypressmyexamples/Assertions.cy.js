/*

/// <reference types = "Cypress" />
*/

describe("Assertions test", ()=>{
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.wait(500)
    })

    it('Implicit assertions', ()=> {
// should ,  and,    contain

//burada bir zorunluluk yaptık. Yani bu web sitesinin
//url'si dedik işte şunu içeriyor mu?
//olumsuzu da var not.include  şeklinde yazabiliriz
        cy.url().should('include','orangehrmlive.com')
        .and('not.contain','ismail')

//Burada ise url direk buna eşit mi diye bakıyoruz.
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//contaion aynı include gibi ama sadece çok küçük bir kısma bakar
        cy.url().should('contain','opensource').and('contain','orangehrm')

//be.visible ise görünüp görünmediğini kontrol eder.      
        cy.get('div [class = orangehrm-login-branding]').should('be.visible')

//exist yani burada bu bulunuyor mu hesabında        
        cy.get('input[name=username]').and('exist')
    })
//************************************************************* */

//orangehrmlive.com sayfasına login olma işlemi    
    it('LOG in ', ()=> {
        cy.get('input[name=username]').type('Admin')
        .should('have.value','Admin') 
        cy.get('input[name=password]').type('admin123')
        cy.get('button[type = submit]').click()

    })
/************************************************************** */
//orangehrmlive.com sayfasına giriş yapıp 
    it('Explicit assertions', ()=> {
        cy.get('input[name=username]').type('Admin')
        cy.get('input[name=password]').type('admin123')
        cy.get('button[type = submit]').click()
  
//bir değişken tanımladık        
        var exampleNmame = "xyz";
        cy.get('p[class=oxd-userdropdown-name]').then( (x)=>{
            var actualName = x.text()
            
            //BDD style 
            expect(actualName).to.equal(actualName)
            expect(actualName).to.not.equal(exampleNmame)
        
            //TDD style
            assert.equal(actualName,actualName)
            assert.notEqual(actualName,"abc")
        
        })
    })
})
