///<reference types="cypress" />

const tempdata = require('../../fixtures/example.json')

describe('test suite',()=>{

    it('first test ',()=>{
    //cy.fixture('example'),then((tdata)=>{
        cy.visit('https://www.youtube.com/')
         cy.get('#search').click().type(tempdata.topicname)
    })
//})
})