///<reference types="cypress" />
/// <reference types="cypress-localstorage-commands" />

const data = require('../../fixtures/example.json')

describe('azurelogin test suit',()=>{

  it(()=>{
    cy.signInAzure()
    cy.saveLocalStorage()
    cy.visit(data.azureUrl)

  })
    it.only('azure log in ',()=>{
      cy.request({
        method: "POST",
        url: `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
        form: true,
        headers: {
          'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
        },
        body: {
          "client_id" : data.clientId,
          "scope" : "https://graph.microsoft.com/.default",
          "client_secret" : data.clientSecret,
          "tenant": data.tenantId,
          "username": data.azureUserEmail,
          "password": data.azureUserPwd,
          "grant_type" : "password"
        }
      }).then(response => {
        console.log('response ', response);
        cy.log('accessToken='+response.body.access_token)
        const ADALToken = response.body.access_token;
        const expiresOn = response.body.expires_in;
    
        localStorage.setItem("adal.token.keys", `${Cypress.config("clientId")}`);
        localStorage.setItem(`adal.access.token.key${Cypress.config("clientId")}`, ADALToken);
        localStorage.setItem(`adal.expiration.key${Cypress.config("clientId")}`, expiresOn);
        localStorage.setItem("adal.idtoken", ADALToken);
      });
    })
})
