///<reference types = "cypress"/>

describe('run shell script in cypress using shell js commands',()=>{
    it('run shell script using cy.exec() command',()=>{
        cy.exec('npm run $ cat cypress.json',{failOnNonZeroExit: false})
        cy.exec({print cypress.json}).its('stderr').should('not.be.empty')
    })

})