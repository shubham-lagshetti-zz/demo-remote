///<reference types = "cypress" />

const data = require('../../fixtures/example.json')

describe('Login to AZURE',()=>{
    it('login to azure with correct credentials',()=>{
        cy.visit(data.azureUrl)
        cy.get('#i0116[type="email"]').click().type(data.azureUserEmail)


    })
})