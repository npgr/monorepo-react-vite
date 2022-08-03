/// <reference types="cypress" />

describe('Layout', () => {
  it('should render layout title', () => {
    cy.visit('http://localhost:6006/iframe.html?args=&id=ui-layout--basic-layout&viewMode=story');

    cy.contains('Basic Layout title').should('exist');
  });
});
