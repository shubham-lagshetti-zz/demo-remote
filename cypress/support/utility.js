class utility {

    getEventList(){
        return cy.get('mat-cell.mat-column-event_name')
    }

   executeLambda(){
    return cy.contains('button[type="submit"]','Test').should('be.visible')
   }

    getService(service,subservicename){

        cy.get('.globalNav-0313',{timeout:5000}).click()
        cy.contains(service).click({force:true})
        cy.contains(subservicename).click({force:true})
    }

    createS3Resource(ResourceId)
    {
        cy.get('.awsui_root_l0dv0_bgg37_3').contains('Buckets').click()
        cy.contains('div.awsui-table-heading-container','Create bucket').contains('Create bucket').click()
        cy.get('#awsui-input-2').click().type(ResourceId)
        cy.get('#createBucket > .awsui-button > span').should('contain','Create bucket')
        cy.get('awsui-button#createBucket').click()
    }

    viewLogsInCloudwatch(functionName){

        cy.wait(3000)
        cy.contains('CloudWatch',{timeout:5000}).should('be.visible')
        cy.contains('Logs').click()
        cy.contains('Log groups').click({force:true})
        cy.get('#microConsole-Logs').its('0.contentDocument.body')
        .then($iframe=>{
            cy.wrap($iframe)
            .find('#awsui-input-0').type(functionName)
            .should('be.visible')

            cy.wrap($iframe)
            .find('[role="table"]')
            .contains(functionName)
            .click()

            cy.wrap($iframe)
            .contains('Search log group')
            .click()

            cy.wrap($iframe)
            .contains('View as text')
            .should('be.visible')
            .click()

        })
    }


}
export default utility  