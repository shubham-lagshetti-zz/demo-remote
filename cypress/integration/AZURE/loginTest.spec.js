///<reference types = "cypress" />

const data = require('../../fixtures/example.json')

describe('Login to AZURE',()=>{
    it('login to azure with correct credentials',()=>{
        cy.visit('https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?redirect_uri=https%3A%2F%2Fportal.azure.com%2Fsignin%2Findex%2F&response_type=code%20id_token&scope=https%3A%2F%2Fmanagement.core.windows.net%2F%2Fuser_impersonation%20openid%20email%20profile&state=OpenIdConnect.AuthenticationProperties%3DlUMRvF5F3pi4hP3qZqiEP3VSfyK8VN8DsbiW19S2Hebuxb02QDAjzT1TVmGrLkOkPsdgQ4qLwdNL7hAksF1HaWf7Bfoztxj2E6YYcFpPLjW16la67mVCMAF2E5D26dlSphYzOVLaT1IvC945UkCDkVIZ39wkMKLfcJNlLUvoGmvxj35K3iCu42RMjrjJG1tGrmSx9BBdol19LoMBcPfjGAM8wAD5_GPeIkD_7Cjs-2-g1Z6kfJ5qCNq63Lo6MTp9M1EBvztqZnPA9xwRVojd36SM7YjarhjMY6M41twj_LNrStg0wAFLqFuZXl1dCyWfJMbFPaGCyk0vY7nPKRSDiQQ9PyjCqHhUu225eTQr6Oj5KOrS0W2k0OLu0cTmNFjkg9dTCzeUgrrYE7IhMae-0w&response_mode=form_post&nonce=637861276042138618.NjU5YWE2ZDUtMzU4ZS00NTA3LTk4ZDktMGViMTkwZGM5YWNjYTMzMjg2NjMtNmJmZC00NzBmLWJmZDYtODQyZDg3YzdkY2Zi&client_id=c44b4083-3bb0-49c1-b47d-974e53cbdf3c&site_id=501430&client-request-id=ec10bb44-09d6-412f-9a70-cf5baa399742&x-client-SKU=ID_NET472&x-client-ver=6.16.0.0&sso_reload=true&iframe-request-id=f1965198-b90e-42a9-a04d-d25431c04100')
        cy.get('#i0116[type="email"]').click().type(data.azureUserEmail)
        cy.get('#idSIButton9').click()
    })
})