describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("hero section", () => {
    it("the h1 contains the correct text", () => {
      //cy.get("h1") replace this with data-test attribute
      //cy.get("[data-test='hero-heading']") replace this with custom command
      cy.getByData("hero-heading") //custom command we created
        .should("exist")
        .contains("Testing Next.js Applications with Cypress")
    })

    it("the features on the home page are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context.only("courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").eq(3).contains("Get started").click() //this isn't ideal as if a course is added/removed our test will break, but sometimes you don't have access and can't change things, so this is last resort
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })

    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").eq(3).contains("Get started").click() //not all steps necessary but showing different things
      cy.location("pathname").should("eq", "/testing-foundations")
    })

    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").eq(3).contains("Get started").click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})
