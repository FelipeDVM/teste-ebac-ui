// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {  
     cy.get('#username').type('felipefabio.teste@teste.com')
      cy.get('#password').type('123456')
      cy.get('[name="login"]').click() })



Cypress.Commands.add('preCadastro', (email, senha, nome , sobrenome) => {  
        cy.get('[name="email"]').type(email)
        cy.get('.register > :nth-child(2) > [name="password"]').type(senha)
        cy.get('[name="register"]').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('[name="account_first_name"]').type(nome)
        cy.get('[name="account_last_name"]').type(sobrenome)
        cy.get('[name="save_account_details"]').click()
    })
      
      

Cypress.Commands.add('detalhesconta', (nome, sobrenome, usuario) => {
  cy.get('#account_first_name').type(nome)
  cy.get('#account_last_name').type(sobrenome)
  cy.get('#account_display_name').type(usuario)
  cy.get('.woocommerce-Button').click()
 

})

















// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })