///<reference types="cypress" />

import utility from "../../support/utility"
import landingPage from "../../support/pageObjects/landingPage"


const util = new utility
const landingpage = new landingPage

const data = require('../../fixtures/config.json')

describe('oxygen event test suits',()=>{
    before('set tokens ',()=>{
        cy.loginOxygenWithoutUI()
        cy.saveLocalStorage()
    })

    beforeEach('restore tokens before every test',()=>{
        cy.restoreLocalStorage()
    })
    let num;
    it('checking for non-comliant event in oxygen after triggering the event collection api',()=>{
        cy.visit('https://oxygen-qa.cloudticity.com/dashboards/overview')
        cy.selectOrganization(data.orgName)
        cy.selectAccountName(data.accName, { timeout: 5000 })
        landingpage.getEvents({timeout: 3000 })
        //cy.wait(80000)
       // cy.reload('w')
        landingpage.getFilterIcon().click()
        landingpage.searchByResourceId('hihkjhjgkhl')
        cy.get('mat-table[class="mat-table cdk-table mat-sort"]').invoke('text').then(textdata => {
           num = textdata.length
            if (textdata.includes('hihkjhjgkhl')) {
                cy.log('---event is present---')
                console.log()
            }
            else {
                cy.log('---event is not available---')
                cy.get('.mat-tooltip-trigger > svg').click()
                expect(textdata).to.includes('dfsfdfd')
                
                
            }
        })
    })

    it.only('checking for non-comliant event in oxygen after triggering the event collection api',()=>{
        cy.visit('https://oxygen-qa.cloudticity.com/dashboards/overview')
        cy.selectOrganization(data.orgName)
        cy.selectAccountName(data.accName, { timeout: 5000 })
        landingpage.getEvents({ setTimeout: 3000 })
        //cy.wait(80000)
        landingpage.refreshOpenEvents()
        //cy.reload()
        landingpage.getFilterIcon().click()
        landingpage.searchByResourceId(ResourceId)
        cy.get('mat-table[class="mat-table cdk-table mat-sort"]').invoke('text').then(textdata => {
            expect(textdata.length).to.eq(textdata.length)
            expect(textdata.length).to.eq(num)
            console.log('eventname',eventname)
            if (textdata.includes(ResourceId) && (textdata.length == 3)) {
                cy.log('---event is present---')
            }
            else {
                cy.log('---event is not available---')
                cy.get('.mat-tooltip-trigger > svg').click()
                expect(textdata).to.includes(ResourceId)
                util.getEventList().invoke('text').then(list=>{
                    list=list.split("  ")
                    for(let i = 0;i<list.length; i++)
                    {
                        expect(textdata).to.include(list[i])
                    }
                  
                })
            }
        })
    })
})