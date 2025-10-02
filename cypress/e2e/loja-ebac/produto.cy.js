///<reference types="cypress"/>
import ProdutosPage from "../../support/pages-objects/Produtos.page";

describe('produtos', () => { 

beforeEach(() => {
   ProdutosPage.visitarUrl()
    
});

    it('Deve selecionar um produto da lista', () => { 
        ProdutosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('exist')


    });
     
    it('Deve buscar um produto com sucesso', () => {
        ProdutosPage.buscarProduto('Ingrid Running Jacket')
        cy.get('.product_title').should('contain', 'Ingrid Running Jacket')
    });

    it('Deve visitar a pagina do produto', () => {
        ProdutosPage.visitarProduto('Ingrid Running Jacket')
        cy.get('.product_title').should('contain', 'Ingrid Running Jacket')
    
    });

    it('Deve adicionar o produto ao carrinho', () => {
        let qtd = 7
        ProdutosPage.buscarProduto('Ingrid Running Jacket')
        ProdutosPage.addProdutoCarrinho('S','Orange' , qtd)
        cy.get('.woocommerce-message > .button').should('exist')



    });

     it.only('Deve adicionar o produto ao carrinho buscando da massa de dados', () => {
       cy.fixture('produtos').then((dados) => {    

        ProdutosPage.buscarProduto(dados[1].nomeProduto)
        ProdutosPage.addProdutoCarrinho(
           dados[1].tamanho,
           dados[1].cor,
           dados[1].quantidade)
       cy.get('.woocommerce-message > .button').should('exist')



       });
       
       

});







});