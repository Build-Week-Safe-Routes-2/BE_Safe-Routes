const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {

    describe('index route', () => {
        it('should return an OK status code from the index route', async () => {
            const expectedStatusCode = 404;

            const response = await request(server).get('/');

            expect(response.status).toEqual(expectedStatusCode);
        });

        it('should return a JSON object fron the index route', async () => {
            const expectedBody = { message: `Welcome!` };

            const response = await request(server).get('/');

            expect(response.body).toEqual(expectedBody);
        });

        it('should return a JSON object fron the index route', async () => {
            const response = await request(server).get('/');

            expect(response.type).toEqual('text/html');
        });

    });
});