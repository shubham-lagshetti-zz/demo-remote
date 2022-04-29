///<reference types="cypress" />

// automation steps:
// 1.trigger lambda in aws for tmds installer
const data = require('../fixtures/example.json')

describe('TMDS test suite',()=>{


    function SigninAWS()  {

        cy.visit('https://cloudticity-fission-qa.signin.aws.amazon.com/console/')
        cy.get('#account').clear().type(Cypress.env('awsaccountid'))
        cy.get('#username').type(Cypress.env('awsusername'))
        cy.get('#password').type(Cypress.env('awspassword'))
        cy.get('#signin_button').click()
        if(cy.contains('Continue'))
        {
            cy.contains('Continue').click()
        }
        }
        

    function getService(service,subservicename){

            cy.get('.globalNav-0313',{timeout:5000}).click()
            cy.contains('span.globalNav-0313','Services').click()
            cy.contains(service).click()
            cy.contains(subservicename).click({force:true})
        }

    function triggerLambdaFunction(lambdafunction1){
        
            cy.get('#awsui-autosuggest-0').type(lambdafunction1 +'{enter}')
            cy.get(':nth-child(2) > span > a').contains(lambdafunction1).click()
            cy.contains('Test').click()
            //clear the event JSON tab pass input values
            cy.contains('button[type="submit"]','Test').should('be.visible').click()
        }

    function SignoutAWS(){

        cy.get('[data-testid="more-menu__awsc-nav-account-menu-button"]').click()
        cy.get('#menu--account').should('contain','Sign out')
        cy.get('#menu--account').contains('Sign out').click()

)
       

    it('trigger lambda in aws for tmds installation',()=>{

        getService('Compute','Lambda')

        //login to aws
        //
        
    })
})