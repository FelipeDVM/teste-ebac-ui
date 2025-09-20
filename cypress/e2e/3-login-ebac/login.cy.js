///<reference types="cypress"/>

describe("funcionalidade: login", () => {
   it("deve fazer login com sucesso", () => {cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('[name="username"]').type('felipefabio.teste@teste.com')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('123456')
    cy.get('[name="login"]').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, felipefabio.teste (não é felipefabio.teste? Sair)')

   })
})