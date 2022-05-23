class WorkflowPage{

    getItemName(){
        return cy.get('[formcontrolname="item_name"]')
    }

    getItemTitle(){
        return cy.get('[formcontrolname="item_title"]')
    }

    getItemDescription(){
        return cy.get('[formcontrolname="item_description"]')
    }

    getItemType(itemType){
        //item type
        cy.contains('span','Item Type').click()
        cy.get('div[role="listbox"]').contains(itemType).click()
    }

    getSeverity(severityState){
        //Severity
        //High,Low,Normal
        cy.contains('span','Severity').click()
        cy.get('div[role="listbox"]').contains(severityState).click()
    }

    selRemediation(remediationType){
        //select remediation
        //remediation type : Triggered Manually, Triggeered Automatically, Schedule remediation
        cy.contains('span','Remediation').click()
        cy.get('div[role="listbox"]').contains(remediationType).click()
    }

    getRemediationDescription(){

        return cy.get('input[placeholder="Remediation Description"]')
    }

    selCMMlevel(Level){
        //CMM level
        //Level : 1,2,3,4,5,6
        cy.contains('span','CMM level').click({force:true})
        cy.get('[role="listbox"]').contains(Level).click()
    }

    getSubject(){
        return cy.get('[formcontrolname="ticket_subject"]')
    }

    getCloseTicket(){
        return cy.get('[formcontrolname="close_ticket_template"]')
    }

    getTags(){
        return cy.get('[formcontrolname="ticket_tags"]')
    }

    getRemediationWarning(){
        //remediation wanrning tab
        return cy.get('[formcontrolname="remediation_warning"]')
    }

    selEventLevel(levelName){
        //Event Level
        //Regional,Global,Account
        cy.get('[formcontrolname="initial_ticket_status"]').click()
        cy.get('[role="listbox"]').contains(levelName).click()
    }

    selStatus(Status){
        //Select the status of workflow
        //status : Review,Testing,Production,Development
        cy.contains('span','Review').click({force:true})
        cy.get('div >[role="listbox"]').contains(Status).click()
        cy.contains('span',Status).should('have.text',Status)
    }

    selCloud(cloudName){
        //navigate to cloud field and select the cloud platform accordingly
        //cloud : AWS,AZURE
        cy.contains('span','Cloud').click()
        cy.get('div >[role="listbox"]').contains(cloudName).click()
        cy.contains('span',cloudName).should('have.text',cloudName)
    }

    selResourceType(resourceType){
        //REsource type
        // AWS:S3::Bucket
        cy.get('[formcontrolname="resource_type"]').click({force:true})
        cy.get('[role="listbox"]').contains(resourceType).click()
    }

    disable(){
        //disable= true when we click on element
        return cy.get('[formcontrolname="is_disabled"]').click()
    }

    selAccount(Accname){
        //select account name as customer or TAM
        cy.contains('span',Accname).click({force:true})
        cy.contains('span',Accname).click({force:true})
    }

    clickonSaveButton(){
        //click on save button and validate the status 
        cy.contains('span','Save').click()
        cy.contains('p','Item updated successfully').should('contain','Item updated successfully')
    }

    searchWorkflow(itemName){
        //search workflow by item name 
        cy.wait(2000)
        cy.get('input[placeholder="Search"]').type(itemName)
        cy.contains('mat-cell',itemName).should('contain',itemName)
    }

    viewWorkflow(){
        //click on eye icon to view and validate the pop title for verification.
        cy.contains('mat-icon','remove_red_eye').click()
        cy.contains('mat-dialog-content','Workflow Details').should('contain','Workflow Details')
    }

    editWorkflow(){
        //click on edit icon and verify the pop apeared on UI
        cy.contains('mat-icon','edit').click()
        cy.contains('mat-dialog-container','Edit Workflow').should('contain','Edit Workflow')
    }



}

export default WorkflowPage