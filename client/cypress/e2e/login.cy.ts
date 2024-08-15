import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage"

const loginPage = new LoginPage()


describe('Login CyHeroes', () => {
    
    it('Login Adm - Success', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUsernameAndPassword(userData.admUser.email, userData.admUser.pass);
        cy.location('pathname').should('equal', '/');        
    })

    it('Login User - Success', () => {
        loginPage.accessLoginPage();
        loginPage.loginWithUsernameAndPassword(userData.commonUser.username, userData.commonUser.password);
        cy.location('pathname').should('equal', '/');        
    })

})