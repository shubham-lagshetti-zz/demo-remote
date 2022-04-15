///<reference types="cypress" />

describe('Api request test',()=>{
    let newdata,idToken,aToken
    
    it('Opne API request',()=>{
        
        cy.LoginOxygen({timeout:30000}).as('loadhomepage')
        
       
        cy.request('https://oxygen-qa.cloudticity.com/auth/login').then((res)=>{

            idToken=window.localStorage.getItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.idToken')
            aToken=window.localStorage.getItem('CognitoIdentityServiceProvider.2sjjekabni5vdplr14s5us28hg.shubham.accessToken')
                
                console.log('idtoken='+idToken)
                console.log('idtoken='+aToken)
                expect(res.status).to.eq(200)
               
                cy.request({
                    method:'POST',
                    url:'https://cognito-idp.us-east-1.amazonaws.com/',
                    Headers:{
                        'X-Amz-Target':'AWSCognitoIdentityProviderService.InitiateAuth',
                        'Content-Type':'application/x-amz-json-1.1',
                          
                    },
                        
                    body:{
                        "AuthParameters": {
                            "USERNAME": "username",
                            "PASSWORD": "pass"
                        },
                        "AuthFlow": "USER_PASSWORD_AUTH",
                         "ClientId": "2..................g"
                    }
                }).then(res=>{
                    cy.wrap(res.localStorage).then(localstorage=>{
        
                        cy.log(localstorage)
        
                    })          
                      cy.log(JSON.stringify(res))
                    expect(res.status).to.eq(200)
                    
                    
                })
            })
    
    })
})