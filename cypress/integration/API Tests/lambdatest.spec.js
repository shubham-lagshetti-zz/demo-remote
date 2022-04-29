///<reference types = "cypress" />

describe('lambda test suite',()=>{

    function getService(service,subservicename){

        cy.get('.globalNav-0313',{timeout:5000}).click()
        cy.contains(service).click()
        cy.contains(subservicename).click({force:true})
    }
    it('lambda test',()=>{
        cy.SigninAWS()
        cy.visit('https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/o2-tmds-agent-installer?tab=testing')
        getService('Compute','Lambda')
        cy.get('.awsui_list-variant-root_l0dv0_1nqus_56').contains('Functions').click()
        cy.get('[placeholder="Filter by tags and attributes or search by keyword"]').type('o2-tmds-agent-installer' +'{enter}')
        cy.get(':nth-child(2) > a').contains('o2-tmds-agent-installer').click()
        cy.contains('Test').click()
       cy.get(' #eventCode .ace_scroller .ace_content').clear({force: true})
    })
})