///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade Cadastro', () => { 
    beforeEach(() => {
        cy.visit('minha-conta/')
    })

    it('Deve completar o cadastro com sucesso', () => { 
        cy.get('[name="email"]').type(faker.internet.email())
        cy.get('.register > :nth-child(2) > [name="password"]').type('123456')
        cy.get('[name="register"]').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('[name="account_first_name"]').type(faker.person.firstName())
        cy.get('[name="account_last_name"]').type(faker.person.lastName())
        cy.get('[name="save_account_details"]').click()
        cy.get('.woocommerce-message').should('exist')
    })

    it('Deve completar o cadastro com sucesso - Usando Variáveis', () => { 
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var sobrenome = faker.person.lastName()

        cy.get('[name="email"]').type(email)
        cy.get('.register > :nth-child(2) > [name="password"]').type('123456')
        cy.get('[name="register"]').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('[name="account_first_name"]').type(nome)
        cy.get('[name="account_last_name"]').type(sobrenome)
        cy.get('[name="save_account_details"]').click()
        cy.get('.woocommerce-message').should('exist')    
    })
     it('Deve completar o cadastro com sucesso - Usando comando customizados', () => {
    cy.preCadastro(faker.internet.email(), '123456', faker.person.firstName(),  faker.person.lastName()) 

});
});