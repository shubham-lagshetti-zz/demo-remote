///<reference types = "cypress" />
const aws = require('aws-sdk')

import promisify from 'cypress-promise'

const awsp = new promisify

describe('First Test Suit',()=>{
    
    it.only('use of await',()=>{
        cy.visit('/')
            aws.config.update({ region: 'us-east-1' });
            
            const ssm = new aws.SSM();
            const params = {
                Name: 'o2-api-key',
                WithDecryption: true
            }

            ssm.getParameter(params).promise().then(result=>{
                cy.wrap(result).as('await')
                cy.wait('@await')
                console.log(result.Parameter.Value)

            })
            //const result = await promisify(ssm.getParameter(params).promise()) 
           
            localStorage.setItem('apitoken',result.Parameter.Value)
            cy.log(result.Parameter.Value)
        })


    })

    

    
   