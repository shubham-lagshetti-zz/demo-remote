///<reference types="cypress" />
var accesstoken,idToken
describe('testing me api',()=>{
before(()=>{
    cy.generateToken()
    cy.saveLocalStorage()

})

beforeEach(()=>{
    cy.restoreLocalStorage()
})

it('me api',()=>{
    cy.request({
        method:'GET',
        url:'https://api-qa.cloudticity.com/v3/api/me',

        headers:{
            Authorization:window.localStorage.getItem('accesstoken'),
            'x-header-id-token':window.localStorage.getItem('idToken'),
            'x-header-org-account':'*:*'
        },

        body:{}

    }).then(res=>{
        expect(res.status).to.eq(200)
        expect(res.body.result.organization.id).to.eq(151)
        expect(res.body.result.organization.organization_name).to.eq('Cloudticity Internal')
        cy.log(res)
        cy.log(JSON.stringify(res.body))
        console.log(res)
        
    })
})

it('o2-scan api',()=>{

    cy.request({
        method:'POST',
        url:'https://api-qa.cloudticity.com/v3/api/dynamodb/o2_tooltip/scan',

        headers:{
            Authorization:window.localStorage.getItem('accesstoken') ,
            'x-header-id-token':window.localStorage.getItem('idToken'),
            'x-header-org-account':'151:203471797812'
        },

        body:{}

    }).then(res=>{
        console.log(res)
        expect(res.status).to.eq(200)
    })
   
})

it('me api',()=>{
    cy.request({
        method:'GET',
        url:'https://api-qa.cloudticity.com/v3/api/me',

        headers:{
            Authorization:window.localStorage.getItem('accesstoken'),
            'x-header-id-token':window.localStorage.getItem('idToken'),
            'x-header-org-account':'*:*'
        },

        body:{}


    }).then(res=>{
        cy.log(res)
        cy.log(JSON.stringify(res))
        console.log(res)
        
    })
})
})