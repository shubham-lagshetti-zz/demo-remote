///<reference types = "cypress" />

describe('GET call test',()=>{

    it('GET call ',()=>{

    
    cy.request({
        method : 'GET' ,
        url : 'https://gorest.co.in/public/v2/users',
        headers:{
           'authorization' :  "Bearer f5cdd93b039599362df6e35248681245365efe5ec8aac854cfc32d4578188821"
        }

    }).then((res)=>{
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(200)
       // expect(res.body.name).should('contain',"sudevi pothuval")
        expect(res.body.name).to.equal('Sudeva Pothuvaal')


    })

})

})