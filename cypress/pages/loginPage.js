// Here is a chunk of Page Object model (Design Pattern) for code reusability andease of scalability only for login activity

class loginPageClass{
    elements ={
        emailField:() => cy.get('#email'),
        passwordField:() => cy.get("input[placeholder='Password']"),
        loginButton:() => cy.get("button[type='submit']"),
        loginSuccessScreen:() => cy.contains('Welcome Back Suleman',{timeout:10000}),
        loginFailedMessage:() =>  cy.get('.Toastify__toast-body > :nth-child(2)')
    }

    login(email,password){
        cy.visit('https://schesti.com/login');
        this.elements.emailField().clear().type(email);
        this.elements.passwordField().clear().type(password);
        this.elements.loginButton().click();
    }
}

module.exports = new loginPageClass();