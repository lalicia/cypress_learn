describe("Custom Cypress Commands", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(500); //necessary to get the page to show in test runner
  });
  it("uses cy.getAllPosts()to retrieve all posts from the /api/posts endpoint", () => {
    // Create a custom Cypress Command called 'getAllPosts' which uses
    // cy.request() to get all of the posts from the /api/posts endpoint
    // Then use this custom command in this test to assert that the length of the posts
    // returned is equal to 2
    cy.getAllPosts().its("length").should("eq", 2);
  });

  it("uses cy.getFirstPost() to retrieve the first post from the /api/posts endpoint", () => {
    // Create a custom Cypress Command called 'getFirstPost' which uses
    // cy.request() to get the first post from the /api/posts endpoint
    // Then use this custom command in this test to assert that the id of the first post
    // is equal to 'pre-rendering'
    cy.getFirstPost(0).its("id").should("eq", "pre-rendering");
  });
});

//passing - woo! noteable that in both cases I've done it differently, so obviously more than one way to pet a pooch
