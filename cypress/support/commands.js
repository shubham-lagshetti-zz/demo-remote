// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//import "cypress-localstorage-commands"
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-localstorage-commands"
import 'cypress-file-upload';

const aws = require('aws-sdk')

Cypress.Commands.add('getsdktokena',()=>{
    { 
        
        aws.config.update({ region: 'us-east-1' });
         const ssm = new aws.SSM();
    
        const params = {
        Name: 'o2-api-key',
        WithDecryption: true
    };
}
        const result =  ssm.getParameter(params).promise();
        console.log(result.Parameter.Value)
        localStorage.setItem('apitoken',result.Parameter.Value)
        
       
     

})
