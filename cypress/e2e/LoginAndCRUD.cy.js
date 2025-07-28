import loginPageClass from '../pages/loginPage.js'

// Login with valid/invalid credentials.
describe('LOGIN TESTS', () => {

  it('Login with valid credentials', () => {
    loginPageClass.login("sulemmanbhatti360@gmail.com", "Remwaste@1");
    loginPageClass.elements.loginSuccessScreen().should('be.visible');
  });

  it('Login with Invalid credentials', () => {
    loginPageClass.login("suleman@gmail.com", "Remwaste@1");
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible');
  });

});

  describe('CRUD TESTS', () => {

    // Creating a new item (e.g., a todo/user).
  it('Add Role in the Company', () => {
    loginPageClass.login("sulemmanbhatti360@gmail.com", "Remwaste@1");
    cy.get("svg[width='24'][height='20']").click();
    cy.contains("User Managements").click();
    cy.get(".text-base.font-normal.text-graphiteGray").click();
    cy.get('body > div:nth-child(25) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)').click();
    cy.get('#name').click().type("Manager");
    cy.get(':nth-child(12) > .ant-checkbox > .ant-checkbox-input').check();
    cy.get('button:contains("Create new role")').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible'); //Asserting presence of expected data after actions.
  });

  // Editing an existing item.
  it('Edit Role in the Company', () => {
    loginPageClass.login("sulemmanbhatti360@gmail.com", "Remwaste@1");
    cy.get("svg[width='24'][height='20']").click();
    cy.contains("User Managements").click();
    cy.get(".text-base.font-normal.text-graphiteGray").click();
    cy.get('.ant-collapse-extra > .ant-dropdown-trigger').trigger('mouseover');
    cy.contains('Edit').click();
    cy.get(':nth-child(11) > .ant-checkbox > .ant-checkbox-input').check();
    cy.get('button:contains("Update")').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible'); //Asserting presence of expected data after actions.

  });

  // Deleting an item.
  it('Delete Role in the Company', () => {
    loginPageClass.login("sulemmanbhatti360@gmail.com", "Remwaste@1");
    cy.get("svg[width='24'][height='20']").click();
    cy.contains("User Managements").click();
    cy.get(".text-base.font-normal.text-graphiteGray").click();
    cy.get('.ant-collapse-extra > .ant-dropdown-trigger').trigger('mouseover');
    cy.contains('Delete').click();
    cy.get('button:contains("Delete")').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible'); //Asserting presence of expected data after actions.

  });



});
