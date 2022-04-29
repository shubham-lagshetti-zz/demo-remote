///<reference types="cypress" />

// "clientId": "a4a903ba-92e6-4046-bbb2-5eedee3ff471",
//   "clientSecret": "nc.I.Ia48tL1ftW0.-M2nO5o9ZRu_1UzY0",
//   "tenantId": "a0d28553-9884-4cdc-a8c1-cc26c3fcae04"

const data = require('../../fixtures/example.json')
let accestoken,idToken,refereshToken
describe("Loginto AWS using API",()=>{

    it('login with UI',() =>{
        cy.log('---login oxygen with UI----')
        cy.LoginOxygen()
    })

    it("API login withou UI",()=>{
        cy.log('---login oxygen without UI---')
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
        }).then(resp=>{
           
            localStorage.setItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.refreshToken',resp.body.AuthenticationResult.RefreshToken)
            localStorage.setItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.accessToken',resp.body.AuthenticationResult.AccessToken)
            localStorage.setItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.idToken',resp.body.AuthenticationResult.IdToken)
            localStorage.setItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.LastAuthUser','shubham')
            cy.visit(data.oxygenUrl)
            cy.wait(5000)
            cy.get('.main-side-nav').contains('Events').click({timeout:5000 })
            
            
          
           
        })
    })
})