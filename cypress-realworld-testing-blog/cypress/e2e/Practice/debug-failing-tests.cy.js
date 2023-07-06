/*
  All of these tests are failing and it is your job to debug them
  to find out why.
*/
describe("Debug Failing Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(200);
  });

  it("displays the correct header text", () => {
    // cy.get('[data-test="home-header"]').contains("real world testing blog"); letter casing
    cy.get('[data-test="home-header"]').contains("Real World Testing Blog");
  });

  it("the post links on the homepage link to the correct posts", () => {
    cy.get('[data-test="post-link-0"]').click().wait(5000); //wait shouldn't be needed but once again, is
    // cy.location("pathname").should("eq", "/posts/pre-rendering"); the path is given an 'as' and shows as something else
    cy.location("pathname").should("eq", "/posts/ssg-ssr");
  });

  it("displays all of the posts on the homepage", () => {
    cy.get('[data-test="posts-list"]').within(($post) => {
      // cy.get("a").should("have.length", 1); there are two posts
      cy.get("a").should("have.length", 2);
    });
  });

  it("/api/posts returns a status code of 200", () => {
    cy.request("GET", "http://localhost:3000/api/posts").then((response) => {
      // expect(response.status).to.eq(201); 200 is what's returned (also changed in test name)
      expect(response.status).to.eq(200);
    });
  });
});
