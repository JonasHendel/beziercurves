describe('Animate', () => {
  it('should start animation', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.contains('Animate').click()

    
  })
})