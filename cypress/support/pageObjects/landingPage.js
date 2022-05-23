
class landingPage
{
    getEvents(){
        return cy.get('.main-side-nav').contains('Events',{timeout:3000}).click()
    }

    getOperations(){ 
        return cy.contains('mat-sidenav','Operations').should('contain','Operations').click()
    }
   
    getConfiguration(){
        return cy.contains('mat-nav-list','Configuration').click()//.cy.contains('Oxygen').click()
    }

    getReports(){
        return cy.contains('mat-sidenav','Reports').should('contain','Reports').click()
       
    }

    getAdmin(){
        return cy.contains('mat-sidenav','Admin').should('contain','Admin').click()
    }

    getFilterIcon(){
        return cy.get('[aria-label="Filter"]')
    }

    navigateToClosedEvents(){
       return  cy.get('.c-nav-container',{timeout:5000}).contains('Closed').click() // click on closed evens modules
    }

    filterByDate(date){
        cy.contains('button>span','Filter by date').click()
        cy.get('[role="presentation"]').contains(date).dblclick()
    }

    refreshOpenEvents(){
        return cy.get('.mat-tooltip-trigger > svg').click()
    }

    searchByResourceId(ResourceId){
        return cy.get('[placeholder="Resource ID"]').type(ResourceId + '{enter}')
    }

    getEventMenu(menuOption){
        cy.contains('mat-icon', 'more_vert').click()
        cy.get('[class="cdk-overlay-pane"]').contains('Mark Compliant').click()//Mark Compliant
    }

    performActionOnEvent(action){
        cy.get('.p-l-r-50 >.mat-focus-indicator').click()//click on actions in remediation section
        cy.get('.mat-menu-content').contains(action).click({ force: true }).should('contain', action)
    }

    //make event as mark compliant
    performAction(ResourceId){
        cy.get('mat-table[class="mat-table cdk-table mat-sort"]').invoke('text').then(textdata => {
            if (textdata.includes(ResourceId)) {
                cy.log('---event is present---')
                this.getEventMenu('Mark Compliant')// click on event menu and go to mark as comliant section
                this.performActionOnEvent('Mark Compliant') //click on particular action menu from remediation tab
                cy.get('#mat-input-0').type('mark event as compliant')
                cy.contains('Submit').should('be.visible').click()
                //cy.get('.close-icon > svg').click()
            }
            else {
                cy.log('---event is not available---')
            }
        })
    }
    searchInOpenEvents(ResourceId){ 
        
        this.getFilterIcon().click()      
        cy.get('[placeholder="Filter by event name"]').type('o2-s3-logging-not-enabled{enter}')
        cy.get('[placeholder="Filter by resource id"]').type(ResourceId+'{enter}') //search for the resource created 
        cy.get('mat-table[class="mat-table cdk-table mat-sort"]').invoke('text').then(textdata=>{
            
            if(textdata.includes(ResourceId)){
                 cy.log('event is present')
                 cy.contains('mat-icon','more_vert').click()
                 cy.get('[class="cdk-overlay-pane"]').contains('View Details').click()
                 cy.get('.m-h-80').should('contain','NON_COMPLIANT')
       
                 cy.get('.close-icon > svg').click()  
            }
            else{
                cy.log('event is not present')
            }
        })       
        
        
    }

    searchInClosedEvents(ResourceId){

        this.getEvents()
        cy.wait(3000)
        this.navigateToClosedEvents()
        this.getFilterIcon().click()
        //cy.get('[placeholder="Filter by event name"]').type('o2-s3-logging-not-enabled{enter}')
        cy.get('[placeholder="Filter by resource id"]').type(ResourceId + '{enter}') //search for the resource created        
        this.filterByDate(6)
        cy.get('mat-table[class="mat-table cdk-table mat-sort"]').invoke('text').then(textdata=>{
            
            if(textdata.includes('qa-shubham-1')){
                 cy.log('event is present')
                 cy.contains('mat-icon','more_vert').click()
                 cy.get('[class="cdk-overlay-pane"]').contains('View Details').click()
                //  cy.get('.m-h-80').should('contain','o2-s3-logging-not-enabled')
                 cy.get('.m-h-80').should('contain','COMPLIANT cycle done')

        cy.get('.close-icon > svg').click() 
            }
            else{
                cy.log('event is not present')
            }
        })
         
        
    }

   
       
  

}

export default landingPage