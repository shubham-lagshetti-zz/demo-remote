///<reference types= "cypress" />

describe('oxygen login using upi',()=>{

    let accesstoken , idtoken;
   
    it('getting auth token from oxygen using oxgen login api and amazon cognito',()=>{

         cy.request({
            method:'POST',
            url:'https://cognito-idp.us-east-1.amazonaws.com/',
            Headers: {
                'X-Amz-Target':'AWSCognitoIdentityProviderService.InitiateAuth',
               'Content-Type':'application/x-amz-json-1.1',
            },   
            body: {
                "AuthParameters": {
                    "USERNAME": "shubham",
                    "PASSWORD": "Fission@123"
                },
                "AuthFlow": "USER_PASSWORD_AUTH",
                 "ClientId": "2sjjekabni5vdplr14s5us28hg"
            }
        }).then(res=>{ 
            expect(res.status).to.eq(200)
            accesstoken = res.body.AuthenticationResult.AccessToken
            idtoken = res.body.AuthenticationResult.idtoken
            cy.log('accesstoken='+accesstoken)
            cy.log('idtoken='+idtoken)    
        })
    })
})