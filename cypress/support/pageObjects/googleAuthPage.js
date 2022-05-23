class googleAuthPage{

    getSkipButton(){
        //cy.wait(6000)
        cy.contains('Skip').click({timeout:7000})
    }
}

export default googleAuthPage