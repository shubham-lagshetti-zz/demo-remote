describe('Tutorialspoint Test', function () {
    // test case
    it('Test Case6', function (){
       // launch the application
       cy.visit("https://accounts.google.com/signup");
       // grab the href prop with prop() JQuery method
       cy.get(':nth-child(1) > a').then(function(l){
          const txt = l.prop('href');
          // get the url in logs
          cy.log(txt);
          // launch the url again
          cy.visit(txt);
       })
    });
 });