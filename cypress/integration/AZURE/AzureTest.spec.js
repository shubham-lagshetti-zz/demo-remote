///<reference types="cypress" />

const data = require('../../fixtures/example.json')
const options ={
    method: "POST",
    url: 'https://login.microsoftonline.com/'+data.tenantId+'/oauth2/v2.0/token',
    form: true,
    failOnStatusCode: true,
    
    body: {
      "grant_type" :"client_credentials",
      "client_id" :data.clientId,
      "client_secret" :data.clientSecret,
      "username": data.azureUserEmail,
      "password": data.azureUserPwd,
     
      "scope" : "https://graph.microsoft.com/.default",
     // "tenant": data.tenantId
     
     
    }
    
    }

describe('azure login suite',()=>{

    it('azure login test ',()=>{
        cy.visit(data.azureUrl,{

            onBeforeLoad:(win)=>{
                cy.request(options).then(response => {
                    console.log('response ', response);
                    cy.log('accessToken='+response.body.access_token)
                    const ADALToken = response.body.access_token;
                    const expiresOn = response.body.expires_in;
                
                    localStorage.setItem("adal.token.keys", `${Cypress.config("clientId")}`);
                    localStorage.setItem(`adal.access.token.key${Cypress.config("clientId")}`, ADALToken);
                    localStorage.setItem(`adal.expiration.key${Cypress.config("clientId")}`, expiresOn);
                    localStorage.setItem("adal.idtoken", ADALToken);
                  })
            } 
        }) 
    })

    it.only('2nd login attempt',()=>{
       
        cy.request(options).then(response => {
            console.log('response ', response);
            expect(response.status).to.eq(200)
            cy.log('accesstoken='+response.body.access_token)
            window.localStorage.setItem('auth',response.body.access_token)
            cy.visit(data.azureUrl)
          })
    })
})