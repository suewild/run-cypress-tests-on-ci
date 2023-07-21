describe("Home Page", () => {
  it("displays the correct heading", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Hello, world!");
  });
});
