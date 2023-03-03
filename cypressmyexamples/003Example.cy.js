// bu 2 şekilde fonksyion gösterimi yapabiliyoruz.
describe("E2E test1", ()=>{
   
   
    it('Test1',()=>{
    expect(true).to.equal(true);
   })
    
   it('Test2 başlığın uyuşması',function(){
        cy.visit("https://www.google.com/");
        cy.title().should('eq','Google')
        
    })

    it('Test3 başlığın uyuşmaması',function(){
        cy.visit("https://www.google.com/");
        cy.title().should('eq','Amazon')
        
    })

})


