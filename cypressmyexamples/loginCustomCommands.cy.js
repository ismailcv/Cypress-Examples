/// <reference types = "Cypress" />
describe("Custom Command login", ()=>{

    it("Test Case 004 - Login sayfası testi",()=>{
        cy.fixture("userdata").as("user");
        cy.visit('https://www.saucedemo.com/');
        cy.get("@user").then((user) =>{
            cy.login(user.username, user.password)
        })
    
    })

    

})        
