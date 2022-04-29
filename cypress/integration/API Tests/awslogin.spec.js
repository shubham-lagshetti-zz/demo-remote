/// <reference types="cypress"/>
const data = require('../../fixtures/example.json')
let accestoken,idToken,refereshToken
describe("Loginto AWS using API",()=>{
    it.only("API login",()=>{
        cy.request({
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
        }).then(resp=>{
            accestoken=resp.body.AuthenticationResult.AccessToken;
            idToken=resp.body.AuthenticationResult.IdToken
            refereshToken=resp.body.AuthenticationResult.RefreshToken
            localStorage.setItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.refreshToken',refereshToken)
            localStorage.setItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.accessToken',accestoken)
            localStorage.setItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.idToken',idToken)
            localStorage.setItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.LastAuthUser','shubham')
            cy.visit(data.oxygenUrl)
            cy.wait(5000)
            cy.get('.main-side-nav').contains('Events').click()
            cy.get(':nth-child(4) > :nth-child(1) > [appaccordiontoggle=""]').click()
           
        })
    })

    it('token',()=>{

        cy.request({
            method:'POST',
            url:'https://api-qa.cloudticity.com/v3/api/dynamodb/o2_tooltip/scan',

            headers:{
                Authorization:accestoken,
                'x-header-id-token':idToken,
                'x-header-org-account':'151:203471797812'
            },

            body:{}


        }).then(res=>{
            console.log(res)
            expect(res.body.newAuth).to.be.true
        })
       
    })

    it('me api',()=>{
        cy.request({
            method:'GET',
            url:'https://api-qa.cloudticity.com/v3/api/me',

            headers:{
                Authorization:accestoken,
                'x-header-id-token':idToken,
                'x-header-org-account':'*:*'
            },

            body:{}


        }).then(res=>{
            cy.log(res)
            cy.log(JSON.stringify(res))
            console.log(res)
            
        })
    })
})