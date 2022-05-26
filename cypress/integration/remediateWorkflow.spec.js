///<reference types ="cypress" />


const data = require('../../../../../../fixtures/config.json')

import LoginPage from "../../../../../../support/pageObjects/LoginPage"
import landingPage from "../../../../../../support/pageObjects/landingPage"
import googleAuthPage from "../../../../../../support/pageObjects/googleAuthPage"

const log = new LoginPage
const lp = new landingPage
const gp = new googleAuthPage

const ResourceId ="qa-shubham-001"
const ResourceId1 = "qa-fission-0011"     
const orgName ="Cloudticity Internal"
const accName = "Cloudticity-Fission-QA"

describe('login and logout for oxygen app',()=>{
    function searchOpenEvents(ResourceId1){

        lp.getEvents()
        cy.wait(3000)
        cy.get('.c-nav-container',{timeout:5000}).contains('Open').click()
        cy.get('[mattooltip="Show Filters"]').click()
        cy.get('.c-card').should('contain','Filter by resource id')
        cy.get('.c-card')
        cy.get('[placeholder="Search"]').type(ResourceId1) //search for the resource created
        cy.get('.mat-tooltip-trigger > svg').click()
        //cy.wait(5000)
        //cy.get('[role="grid"]').should('contain',ResourceId1) // validate the rosource in the list of events
        
    }

    function remediateResource(ResourceId1){
        cy.wait(2000)
        cy.contains('mat-icon','remove_red_eye').click() //click on eye button to perform actions
        cy.wait(2000)
        cy.get('.font-13').should('contain',ResourceId1) 
        cy.get('.font-13',{timeout:3000}).should('contain','o2-s3-default-encryption')
        console.log(cy.get('.font-13').should('contain',ResourceId1))
        cy.get('.font-13').should('contain','Remediate Now')
        cy.get('#mat-expansion-panel-header-2').click()
        cy.contains('.mat-button-wrapper','Remediate Now').click()
        cy.wait(1000)
        //cy.get('form.ng-untouched ng-pristine ng-invalid ng-star-inserted').should('contain','o2-s3-default-encryption')
        
        cy.get('div.mat-dialog-actions').contains('Remediate Now').click()//div.mat-dialog-actions button
        cy.get(':nth-child(6) > [data-layer="Content"]').click()
    }

    function selectOrganization(orgName){

        cy.get('#header-organization-dropdown',{timeout:5000}).contains(orgName).click() // orgName - Cloudticity Internal
        cy.get('span.mat-option-text').click()
        // cy.wait(3000)
    }

    function selectAccountName(accName){

        cy.get('div #mat-select-value-5').click()//click on accpunt dropdown//header-account-dropdown
        cy.get('div #header-account-dropdown-panel',{timeout:5000}).contains(accName).click()//select all as counts
        cy.wait(3000)
    }

    beforeEach('launch the Ocygen Url',()=>{
        cy.visit(data.oxygenUrl)
    })

    it.skip('login to oxygen',()=>{

        cy.LoginOxygen()
        //cy.signInOxygen()


    })

    it.only('remediate the o2-s3-default-encryption',()=>{
        cy.LoginOxygen()
        gp.getSkipButton({timeout:5000})
        //cy.wait(2000)
        cy.selectOrganization(data.orgName)
        cy.selectAccountName(data.accName)
        lp.getEvents()
        //cy.wait(5000)
        searchOpenEvents(ResourceId1)
        //remediateResource(ResourceId1)
        cy.signOutOxygen()

    })
})