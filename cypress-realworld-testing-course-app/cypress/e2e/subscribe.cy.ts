describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the mailing list", () => {
    cy.getByData("email-input").should("exist").type("email@email.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("email@email.com")
  })

  it("does NOT allow users to subscribe with an invalid email address", () => {
    cy.getByData("email-input").should("exist").type("email")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("does NOT allow uses to subscribe if they're already subscribed", () => {
    cy.getByData("email-input").should("exist").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("john@example.com")
  })
})
