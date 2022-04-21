///<reference types="cypress" />
///<reference types="cypress-localstorage-commands" />

describe('event collection api',()=>{
   
    it.only('Making an POST request to collect events via event collection API ',()=>{
        cy.generateToken()
        cy.request({

            method:"POST",
            url:"https://wm0oeux4z7.execute-api.us-east-1.amazonaws.com/prod/oxygen-api-collection",

            headers:{
                authorizationToken:'73291ddc-7bc6-42d6-b763-a41f4857fa49',
                "x-header-account-number":840798010532
                
            },
            body:{}
            
        }).then(res=>{
            expect(res.status).to.eq(200);
            cy.log(res.body)
            
        })
    })
})