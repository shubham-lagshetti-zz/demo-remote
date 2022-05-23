///<reference types = "cypress" />
describe('First Test Suit',()=>{
    it('launch google url',()=>{
        cy.visit('https://www.google.com/')
        cy.url().should('contain','https://www.google.com/')
    })
})