const supertest = require('supertest')
const {app, server} = require('../index')
const mongoose = require('mongoose')

const api = supertest(app)
jest.setTimeout(10000)

test('blogs are returned as json', async () => {
    await api
        .get('http://localhost:3003/api/blogs')
        .expect(200)
})


afterAll(() => {
    mongoose.connection.close()
    server.close()
})