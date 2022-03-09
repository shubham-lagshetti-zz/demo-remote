///<reference types="cypress" />

// how to use POST call
describe('POST call request',()=>{

    let acessTocken = 'f5cdd93b039599362df6e35248681245365efe5ec8aac854cfc32d4578188821'

    it('create user test',()=>{

        cy.request({

            method :'POST',
            url:'https://gorest.co.in/public/v2/users',


            Headers:{
                'authorization': 'Bearer' + acessTocken
            },

            body:{
                "name":"Test Automation",
                "gender":"male",
                "email":"cytesting@gmail.com",
                "status":"active"

            }
        }).then((res)=>{

            expect(res.status).to.eq(201)   
        }
    })
})