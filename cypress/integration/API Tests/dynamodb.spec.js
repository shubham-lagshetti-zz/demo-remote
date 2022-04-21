///<reference types="cypress"/>
import {eventdata} from "../../fixtures/samplebody"
import utility from "../../support/utilities"

const util = new utility

describe('send dummy data to dynamo db via api',()=>{

    before(()=>{
        cy.generateToken()  
    })

    beforeEach(()=>{
        cy.restoreLocalStorage()
    })

    it('send sameple data into dynamo db',()=>{
        
        cy.request({
            method:'POST',
            url:'https://api-qa.cloudticity.com/v3/api/dynamodb/o2_event',
    
            headers:{
                Authorization:window.localStorage.getItem('accesstoken'),
                'x-header-id-token':window.localStorage.getItem('idToken'),
                'x-header-org-account':'*:*'
            },
            body:eventdata
        }).then(res=>{
            cy.log(JSON.stringify(res.body))
            expect(res.body.message).to.eq('record created successfully')
        })        
    })

    it.only('me api',()=>{
        cy.restoreLocalStorage()
        util.sendDataToDynamoDB()
    })

})

