// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-localstorage-commands"
const data = require('../fixtures/config.json')

Cypress.Commands.add('SigninAWS',() => {
    cy.log('---Login to AWS---')
    cy.visit(data.awsUrl)
    cy.get('#account').clear().type(data.AccId)
    cy.get('#username').type(data.awsUserName)
    cy.get('#password').type(data.awsPassword)
    cy.get('#signin_button').click()
})

Cypress.Commands.add('SignoutAWS',()=>{
    cy.log('---Logout AWS---')
    cy.get('[data-testid="more-menu__awsc-nav-account-menu-button"]').click()
        cy.get('#menu--account').should('contain','Sign out')
        cy.get('#menu--account').contains('Sign out').click()
        if(cy.contains('Continue'))
        {
            cy.contains('Continue').click()
        }
})

Cypress.Commands.add('LoginOxygen',()=>{
    cy.log('---Login to Oxygen via UI---')
    cy.visit(data.oxygenUrl)
    cy.get('#mat-input-0').type(Cypress.env('username'))
    cy.get('#mat-input-1').type(Cypress.env('password'))
    cy.get('[type="submit"]').click({timeout:7000})
    cy.contains('Skip').click({timeout:7000})
    // cy.wait(3000)
   
})

Cypress.Commands.add('SignoutOxygen',()=>{
    cy.log('---Lougout Oxygen---')
    cy.contains('span','SL').click()
    cy.get('.mat-menu-content').should('contain','Sign Out')
    cy.get('.mat-menu-content').contains('Sign Out').click()
    cy.get('.c-card').should('contain','Sign In')
})



Cypress.Commands.add('selectAccountName',(accName)=>{
    cy.log('---Select Account---')
    cy.get('div #mat-select-value-5').click()//click on accpunt dropdown//header-account-dropdown
    cy.get('div #header-account-dropdown-panel').contains(accName).click()//select all as counts
    //cy.wait(3000)
})

Cypress.Commands.add('selectOrganization',(orgName)=>{
    cy.log('---Select Organization---')
    cy.get('#mat-select-value-3').click() // orgName - Cloudticity Internal
    cy.get('.mat-option-text').contains(orgName).click()
    //cy.wait(3000)
})

Cypress.Commands.add('selStatus',(Status)=>{
    cy.contains('span','Review').click()
    cy.get('div >[role="listbox"]').contains(Status).click()
    cy.contains('span',Status).should('have.text',Status)
})

Cypress.Commands.add('generateToken',()=>{
    cy.log('---Generate token for Oxygen---')
    cy.request({
        method:"POST",
        url:"https://cognito-idp.us-east-1.amazonaws.com/",
        headers:{
            "X-Amz-Target":"AWSCognitoIdentityProviderService.InitiateAuth",
            "Content-Type":"application/x-amz-json-1.1"
        },
        body:{
            "AuthParameters" : {
                "USERNAME" : Cypress.env('username'),
                "PASSWORD" : Cypress.env('password')
            },
            "AuthFlow" : "USER_PASSWORD_AUTH",
            "ClientId" : "2sjjekabni5vdplr14s5us28hg"
         }
    }).then(res=>{
        cy.setLocalStorage('accesstoken',res.body.AuthenticationResult.AccessToken)
        cy.setLocalStorage('idToken',res.body.AuthenticationResult.IdToken)
     })   
})

Cypress.Commands.add('loginOxygenWithoutUI',()=>{
    cy.log('---Login Oxygen Without UI---')
    const options = 
        {
            method:"POST",
            url:"https://cognito-idp.us-east-1.amazonaws.com/",
            headers:{
                "X-Amz-Target":"AWSCognitoIdentityProviderService.InitiateAuth",
                "Content-Type":"application/x-amz-json-1.1"
            },
            body:{
                "AuthParameters" : {
                   "USERNAME" : "shubham",
                   "PASSWORD" : "Fission@123"
                },
                "AuthFlow" : "USER_PASSWORD_AUTH",
                "ClientId" : "2sjjekabni5vdplr14s5us28hg"
             }
        }
    cy.request(options).then(resp=>{
       
        localStorage.setItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.refreshToken',resp.body.AuthenticationResult.RefreshToken)
        localStorage.setItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.accessToken',resp.body.AuthenticationResult.AccessToken)
        localStorage.setItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.idToken',resp.body.AuthenticationResult.IdToken)
        localStorage.setItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.LastAuthUser','shubham')
        cy.visit(data.oxygenUrl)
        cy.wait(5000)
       
    })

})

