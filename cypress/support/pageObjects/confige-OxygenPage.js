class configeOxygenPage {

    getConfiguration(){
       return cy.get('.main-side-nav').contains('Configuration').click({timeout:3000})
    }
    getOxygen(){
       return cy.contains('Oxygen').should('contain','Oxygen').click({timeout:3000})
    }

    getNewWorkflow(){
        return cy.contains('mat-icon','add').should('contain','add').click()
    }

    validateNewWorkflow(){

      cy.get('.p-t-30 > .head').should('contain','Add Workflow')
    }

}

export default configeOxygenPage