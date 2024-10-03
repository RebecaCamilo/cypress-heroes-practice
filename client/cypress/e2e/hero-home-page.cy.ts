/// <reference types="cypress" />

describe("hero-home-page", () => {

    describe('User not logged', () => {
        it.skip('reload the page by clicking in title and still not logged', () => {
            cy.visit('http://localhost:3000/heroes');
            cy.contains('button', 'Login').should('be.visible');

            cy.get('img[alt="Cypress Heroes Logo"]').click();
            cy.contains('button', 'Login').should('be.visible');
        });
        
      });
  });