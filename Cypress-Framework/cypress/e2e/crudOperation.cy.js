describe('API Testing with Cypress', () => {

    it('GET request - validate status code', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.equal(200)
            })
    });

    it('POST request - create a new post', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('title', 'foo');
        });
    });

    it('PUT request - update a post', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'baz',
            body: 'qux',
            userId: 1
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('title', 'baz');
        });
    });

    it('DELETE request - delete a post', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                expect(response.status).to.eq(200);
            });
    });

});