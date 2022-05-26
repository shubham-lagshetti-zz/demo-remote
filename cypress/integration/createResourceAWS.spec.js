///<reference types="cypress" />

const awsUrl ="https://cloudticity-fission-qa.signin.aws.amazon.com/console/"

import homePage from "../../../../../support/AWS PageObjects/homePage"

const data = require('../../../../../fixtures/config.json')

const hp = new homePage
//const AccId = "cloudticity-fission-qa"
// const userName = "subham-qa"
// const password = "Shubham@1747"
const ResourceId = "qa-shubham-001"

describe('test suite to create reesource in aws',()=>{
    /* function to create the the resource in S3 bucket in AWS
       validate the resource and create the resource in S3 bucket
    */
    function createBucketAWS(ResourceId){
        
        cy.contains('div.awsui-table-heading-container','Create bucket').should('contain','Create bucket')
        cy.contains('div.awsui-table-heading-container','Create bucket').contains('Create bucket').click()
        cy.get('.awsui-app-layout__content').should('contain','Create bucket')
        cy.get('#awsui-input-1').click().type(ResourceId)
        cy.get('#createBucket > .awsui-button > span').should('contain','Create bucket')
        cy.get('awsui-button#createBucket').click()
    }

    beforeEach('execute every time',()=>{
        cy.visit(data.awsUrl) //Lounch AWS WEbsite
    })

    it('create S3 bucket resource in aws',()=>{

        cy.SigninAWS()  //Login to AWS
        hp.navigateToS3Bucket() // Navigate to S3 bucket
       // createBucketAWS(ResourceId) //Creating resource in S3 storage
        cy.SignoutAWS()  // Log out AWS
    })

})