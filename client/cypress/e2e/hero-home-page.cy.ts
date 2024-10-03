/// <reference types="cypress" />

describe("hero-home-page", () => {

    describe('User not logged', () => {
        it.skip('reload the page by clicking in title and still not logged', () => {
            cy.visit('http://localhost:3000/heroes');
            cy.contains('button', 'Login').should('be.visible');

            cy.get('img[alt="Cypress Heroes Logo"]').click();
            cy.contains('button', 'Login').should('be.visible');
        });

        it('like hero should alert the user need to login', () => {
            cy.visit('http://localhost:3000/heroes');
            cy.get('button[data-cy="like"]').first().click();

            cy.get('.open.modal').should('be.visible');
            cy.contains('h5', 'You must log in to like.').should('be.visible');
            cy.contains('button', 'Ok').should('be.visible');
        });
        
      });
  });