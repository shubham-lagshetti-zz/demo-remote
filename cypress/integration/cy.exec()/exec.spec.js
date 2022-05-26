///<reference types ="cypress" />

const shell = require('shelljs')
describe('run script using cy.exec()',()=>{

    it.skip('run scripts',()=>{
       cy.exec('npm run noderun' ).then(res=>{
            cy.log(res.stdout)
           expect(res.stdout).includes(40)
       })
           
        
    })

    it('run azlogin',()=>{
        cy.exec('npm run run:azlogin').then(result=>{
            cy.log(result.stdout)
            cy.log(JSON.parse(result.code))
        })
    })

})