///<reference types = "cypress" />

const data=require('../fixtures/example.json')
Cypress.Commands.add('LoginOxygen',()=>{
    cy.visit(data.oxygenUrl)
    cy.get('#mat-input-0').type(Cypress.env('username'))
    cy.get('#mat-input-1').type(Cypress.env('password'))
    cy.get('[type="submit"]').click({timeout:7000})
    cy.wait(8000)
    //cy.contains('Skip',{timeout:7000}).click()

})

Cypress.Commands.add('generateToken',()=>{
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