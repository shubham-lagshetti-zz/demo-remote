const fdata =require('../../fixtures/config.json')


class LoginPage{
     
    getUsername(){

        return cy.get('#mat-input-0')
    }

    getPassword(){
        return cy.get('#mat-input-1')
    }

    getSignInButton(){
        return cy.get('[type="submit"]',)

    }

    LoginOxygen(){
        
            this.getUsername().type(fdata.o2Username)
            this.getPassword().type(fdata.o2Password)
            cy.get('[type="submit"]').click()
    }

  

}

export default LoginPage