describe("Home Page", { testIsolation: false }, () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });
  it("displays the correct heading", () => {
    cy.contains("Hello, world!");
  });

  it("displays additional text", () => {
    cy.contains("Welcome to my application");
  });
});
