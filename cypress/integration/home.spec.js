describe("Home", () => {
  it("should be accessible", () => {
    cy.visit("/");
    cy.injectAxe();
    cy.checkA11y();
  });
});
