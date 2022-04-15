/// <reference types="cypress"/>
let accestoken,idToken
describe("Loginto AWS using API",()=>{
    it("API login",()=>{
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
            cy.contains('Events').should('contain','Events')
            console.log(resp);
            cy.log('accesstoken='+JSON.stringify(resp.body.AuthenticationResult.AccessToken));
            accestoken=resp.body.AuthenticationResult.AccessToken;
            idToken=resp.body.AuthenticationResult.IdToken
           localStorage.setItem('accesstoken',accestoken)
           
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