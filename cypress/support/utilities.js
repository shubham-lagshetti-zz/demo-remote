class utility {

   
    sendDataToDynamoDB(){
        

       
        cy.restoreLocalStorage()
       cy.request({
            method:'POST',
            url:'https://api-qa.cloudticity.com/v3/api/me',
    
            headers:{
                Authorization:window.localStorage.getItem('accesstoken'),
                'x-header-id-token':window.localStorage.getItem('idToken'),
                'x-header-org-account':'*:*'
            },
            body:{}
        }).then(res=>{
            cy.log(JSON.stringify(res.body))
            expect(res.status).to.be(200)
        })
    }

}

export default utility