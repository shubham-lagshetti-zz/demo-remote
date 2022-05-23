///<reference types = "cypress" />

const data = require('../../fixtures/config.json')



const Cognitodata = 'CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.'





describe('assert local storage ',()=>{
    let tokendata
let reqid,aToken,idToken,authuser,accesstoken
   
    

    // before('get tokens from local storage',()=>{
        
    //     cy.LoginOxygen({timeout:30000})
    //     cy.visit('https://oxygen-qa.cloudticity.com/').then(res=>{
            
    //         cy.log(res)
    //         idToken=res.window.localStorage.getItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.idToken')
    //         console.log('idtoken='+idToken)
    //         cy.getLocalStorage('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.idToken').then(accesstoken=>{
    //             console.log('acesstoken='+accesstoken)
    //             aToken=accesstoken
    //             console.log('atoken='+aToken)

    //         })
    //     })
            
    // })

    it('POST',()=>{
        cy.request({
            method:'POST',
            url:'https://cognito-idp.us-east-1.amazonaws.com/',

            Headers:{
                'X-Amz-Target':'AWSCognitoIdentityProviderService.InitiateAuth',
                'Content-Type':'application/x-amz-json-1.1',
                'origin':'https://oxygen-qa.cloudticity.com',
                'refere':'https://oxygen-qa.cloudticity.com/',
                'connection':'keep-alive'   
            },
                
            body:{
                "AuthParameters": {
                    "USERNAME": "shubham",
                    "PASSWORD": "Fission@123"
                },
                "AuthFlow": "USER_PASSWORD_AUTH",
                "ClientId": "2sjjekabni5vdplr14s5us28hg"
            }
        }).then(res=>{
            cy.wrap(res).then(newres=>{
                cy.log(newres)
            })
            console.log(JSON.stringify(res))
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            cy.getLocalStorage('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.idToken').then(token=>{ cy.log(token)})

        })
        })
    
})