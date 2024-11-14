const { Router } = require('express');

const routes = Router();

routes.get('/health', (res, req) => {
    return res.status(200).send({ message: 'Server is running' });
})

module.exports = routes;