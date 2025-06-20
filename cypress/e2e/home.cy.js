describe('home page', () => {
  it('Should render the home page', () => {
    cy.intercept('GET', '/api/v1/products').as('getProducts');
    cy.visit('/')
    cy.wait('@getProducts').its('response.statusCode').should('eq', 200);
    cy.get('h1').should('contain', 'Reborn Market')
    cy.get('button').contains('Iniciar Sesión').should('be.visible')
    cy.get('button').should('contain', 'Añadir anuncio')
    cy.get('img[alt="Logo"]').should('be.visible')
  })
})