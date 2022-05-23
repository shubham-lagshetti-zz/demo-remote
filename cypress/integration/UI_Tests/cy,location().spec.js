///<reference types = "cypress" />

describe('cy.location() asseriton with diff prop',()=>{
    it('test',()=>{

cy.visit('https://demo.realworld.io/#/')


cy.url().should(url=>{
    console.log(url)
})
cy.location().should((loc) => {

  expect(loc.hostname).to.eq('localhost')
  expect(loc.href).to.eq(
    'http://localhost:8000/app/index.html?q=dan#/users/123/edit'
  )
  expect(loc.origin).to.eq('http://localhost:8000')
  expect(loc.pathname).to.eq('/app/index.html')
  expect(loc.port).to.eq('8000')
  expect(loc.protocol).to.eq('http:')
  expect(loc.search).to.eq('?q=dan')
  expect(loc.toString()).to.eq(
    'http://localhost:8000/app/index.html?q=brian#/users/123/edit'
  )
})
        
})
})
