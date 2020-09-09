

describe('My First Test', () => {
  it("should pass", () => {
    cy.visit("https://www.google.ca");
    expect(true).to.equal(true);
  })
});