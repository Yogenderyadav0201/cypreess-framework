describe("API Testing with Cypress", () => {
    it("GET request - validate status code", () => {
        cy.request(
              "https://jsonplaceholder.typicode.com/posts/1")
            .its("status")
            .should("equal", 200);
    });
});
