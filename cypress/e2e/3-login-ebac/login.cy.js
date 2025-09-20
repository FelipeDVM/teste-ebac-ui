///<reference types="cypress"/>

describe("funcionalidade: login", () => { 
   beforeEach(() => {cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   
});
   afterEach(() => {cy.screenshot()
   
});

   it("deve fazer login com sucesso", () => {
    cy.get('[name="username"]').type('felipefabio.teste@teste.com')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('123456')
    cy.get('[name="login"]').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, felipefabio.teste (não é felipefabio.teste? Sair)')

   })

   it('Deve exibir uma mensagem de erro ao inserir o usuario invalido', () => {
    cy.get('[name="username"]').type('felipfabio.teste@teste.com')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('123456')
    cy.get('[name="login"]').click()
    cy.get('.woocommerce-error').should('contain',"Endereço de e-mail desconhecido.")
      
   });

  it('deve exibir uma mensagem de erro ao inserir senha invalida', () => {
    cy.get('[name="username"]').type('felipefabio.teste@teste.com')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('12456')
    cy.get('[name="login"]').click()
    cy.get('.woocommerce-error').should('contain','A senha fornecida para o e-mail felipefabio.teste@teste.com está incorreta')
  });
})