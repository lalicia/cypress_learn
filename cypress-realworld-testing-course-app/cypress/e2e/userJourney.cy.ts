describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.wait(100)
  })

  it("tests that a user can find a course on the home page and complete the course's lessons", () => {
    cy.getByData("course-0").find("a").eq(3).click()
    cy.location("pathname").should("eq", "/testing-your-first-application")
    cy.getByData("next-lesson-button").click()
    cy.wait(5000) //added a wait time as the process wasn't working fast enough to return a pass, and was bringing up the path after the test failed
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.wait(5000)
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.wait(5000)
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button")
      .should("exist")
      .contains("Complete Course") //still a next-lesson-button but the text is different
      .click()
    cy.wait(5000)
    cy.location("pathname").should("eq", "/") //takes back to home
  })
})
