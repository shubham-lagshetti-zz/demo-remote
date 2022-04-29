///<reference types ='cypress' />

//const data = require("../../../fixtures/example.json");
const shell = require("shelljs");

describe("azure customer tmds installation", () => {
    before(()=>{

        cy.task('startTmds',{timeout:20000})
    });
    after(()=>{
        cy.task('endTmds')
    });
  it("azure customer tmds installation check", () => {
    cy.log("azure customer tmds installation check start");

    
    
  });
});