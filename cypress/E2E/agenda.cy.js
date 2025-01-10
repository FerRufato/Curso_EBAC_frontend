//  <reference types="cypress" />


describe('Testes de Inclusão, Alteração e Remoção de Contato na Agenda', () => {
    beforeEach(() => {
       
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
       
        cy.get('input[placeholder="Nome"]').type('Fernanda Rufato')
        cy.get('input[placeholder="E-mail"]').type('fer.rufato@teste.com')
        cy.get('input[placeholder="Telefone"]').type('11912345678')

       
        cy.get('button[type="submit"]').click()

       
        cy.contains('Fernanda Rufato').should('be.visible')
        cy.contains('fer.rufato@teste.com').should('be.visible')
        cy.contains('11912345678').should('be.visible')
    })

    it('Deve editar um contato existente', () => {
       
        cy.get('.edit').first().click()

       
        cy.get('input[placeholder="Nome"]').clear().type('Gian Souza Oliveira')
        cy.get('input[placeholder="E-mail"]').clear().type('gian@ebac.com.br')
        cy.get('input[placeholder="Telefone"]').clear().type('11912345678')

       
        cy.get('button[type="submit"]').click()

      
        cy.contains('Gian Souza Oliveira').should('be.visible')
        cy.contains('gian@ebac.com.br').should('be.visible')
        cy.contains('11912345678').should('be.visible')
    })
   
    it('Deve remover o primeiro contato', () => {
            cy.get('.delete')  
            .first()  
            .should('be.visible') 
            .click()  
    
        
        cy.get('li').first().should('not.contain', 'Deletar') 
    })
    
    
    
    
   })

   