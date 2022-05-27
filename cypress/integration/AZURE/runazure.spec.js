///<reference types="cypress" />

describe('run azure',()=>{
    it('run with cy.exec() cmd',()=>{
        cy.exec('npm run run:azure')
    })
})