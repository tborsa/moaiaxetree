describe("The robot should always win when cheating", () => {
  before(() => {
    // visit root page
    cy.visit("/");
    // confirm robot is cheating
    cy.get('section.computer').contains('EXTERRMINATE !');
  })

  it('should throw axe if the user throws tree', () => {
    cy.server()
    cy.route({
      method: "POST",
      url: "/users",
      response: [
        {message: 'User saved'}
      ]
    });
    // click on third user throw option
    cy.get('section.player .choices button').eq(2).click();
    //  check for "ahha looser, do it the same but, uh, better."
    cy.contains("ahha looser, do it the same but, uh, better.");
    // also check that computer threw axe
  })

  it('should throw Moai if the user throws Axe', () => {
    // click on third user throw option
    cy.get('section.player').contains("🪓").click();
    //  check for "ahha looser, do it the same but, uh, better."
    cy.contains("ahha looser, do it the same but, uh, better.");
    // also check that computer threw axe
  })

  it('should throw Tree if the user throws Moai', () => {
    // click on third user throw option
    cy.get('section.player').contains("🗿").click();
    //  check for "ahha looser, do it the same but, uh, better."
    cy.contains("ahha looser, do it the same but, uh, better.");
    // also check that computer threw axe
  })
})