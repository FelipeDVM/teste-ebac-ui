///<reference types="cypress"/>

describe('produtos', () => { 

beforeEach(() => {
    cy.visit('produtos/')
    
});

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //cy.get('.block-inner >')
        //.first()
        //.eq(2)
        .contains('Argus All-Weather Tank')
        .click()
        cy.get('#tab-title-description > a').should('exist')


    });
    
});