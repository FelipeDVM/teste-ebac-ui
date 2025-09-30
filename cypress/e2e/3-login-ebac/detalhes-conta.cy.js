///<reference types="cypress"/>

describe('funcionalidade detalhes da conta', () => { 
    beforeEach(() => {
         cy.visit('minha-conta/edit-account')
         cy.fixture('perfil').then(
            
            login => { cy.login(login.usuario, login.senha) 




         })
         
});

it('Deve completar detalhes da conta sucesso', () => {
    cy.detalhesconta('felipe', 'fabio', 'qa')
     cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')


    
});
    
});