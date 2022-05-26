///<reference types = "cypress" />
describe('First Test Suit',()=>{
    before('set tokens',()=>{
        cy.loginOxygenWithoutUI()
        cy.saveLocalStorage()
    })
    beforeEach('restore tokens before each test',()=>{
        cy.restoreLocalStorage()
    })
    it('file upload',()=>{
        cy.visit('https://oxygen-qa.cloudticity.com/configuration/oxygen/frameworks')
        cy.contains('span',' New Framework ').click()
        cy.get('#mat-input-0').type('fission')
        cy.get('#mat-input-1').type('1')
        cy.get('.csv-file-chooser-section > .mat-focus-indicator').click().attachFile('task to test.png')
       
    })
})