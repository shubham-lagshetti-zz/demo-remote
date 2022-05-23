///<reference types ="cypress" />

const shell = require('shelljs')
describe('run script using cy.exec()',()=>{

    it('run scripts',()=>{
        let username='xx';
        let pwd='xx'
        shell.exec(`az login -u "${username}" -p "${pwd}"`)
       cy.exec('npm run shell.exec(`az login -u "${username}" -p "${pwd}"`)').then(res=>{
            cy.log(res.stdout)
           expect(res.stdout).includes(40)
       })
           
        
    })

    it.skip('run azlogin',()=>{
        cy.exec('npm run run:azlogin').then(result=>{
            cy.log(result.stdout)
            cy.log(JSON.parse(result.code))
        })
    })

})