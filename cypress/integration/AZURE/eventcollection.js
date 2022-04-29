///<reference types= "cypress"/>



const headers=
    {
        authorizationToken: '73291ddc-7bc6-42d6-b763-a41f4857fa49',
        "x-header-account-number": 840798010532
    }
    

    const tbody=require('../../fixtures/body.json')


const url="https://wm0oeux4z7.execute-api.us-east-1.amazonaws.com/prod/oxygen-api-collection"

describe('sending diff body in rquest',()=>{
    it('sending body with account number ',()=>{

        cy.request(
            {
                method: "POST",
                url: "https://wm0oeux4z7.execute-api.us-east-1.amazonaws.com/prod/oxygen-api-collection",
                headers: {
                    authorizationToken: '73291ddc-7bc6-42d6-b763-a41f4857fa49',
                    "x-header-account-number": 840798010532
                },
                body:tbody.bodyWithAccountNumber
            }
        ).then(res=>{
            expect(res.status).to.eq(200)
            cy.log(JSON.stringify(res.body))
            cy.log(tbody.bodyWithAccountNumber)

        })
    })

    it('sending body with account number ',()=>{
        cy.request(
            {
                method: "POST",
                url: "https://wm0oeux4z7.execute-api.us-east-1.amazonaws.com/prod/oxygen-api-collection",
                headers: {
                    authorizationToken: '73291ddc-7bc6-42d6-b763-a41f4857fa49',
                    "x-header-account-number": 840798010532
                },
                body:tbody.bodyWithCloudName
            }
        ).then(res=>{
            expect(res.status).to.eq(200)
            cy.log(JSON.stringify(res.body))
            cy.log(tbody.bodyWithCloudName)
        })
        

    })


})