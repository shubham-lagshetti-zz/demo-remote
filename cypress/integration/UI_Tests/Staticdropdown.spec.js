///<reference types = "cypress" />



describe('Tutorialspoint Test', function () {
    // test case
    it('Test Case2', function (){
       cy.visit("https://www.tutorialspoint.com/selenium /selenium_automation_practice.htm");
       // checking by values
       cy.get('input[type="checkbox"]')
       .check(['Manual Tester','Automation Tester']);
       // selecting a value from static dropdown
       cy.get('select[name="continents"]').select('Europe')
       // asserting the option selected
       .should('have.text', 'Europe')
    });
 });