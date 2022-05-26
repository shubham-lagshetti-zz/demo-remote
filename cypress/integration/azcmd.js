///<reference types="cypress" />
describe('run az cmd ',()=>{
    it('run az cmd using npm',()=>{
        cy.exec('npm run run:azlogin')
    })
})