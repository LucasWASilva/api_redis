const { Router } = require('express');
const RepositoriesController = require('./controllers/RepositoriesController');

const routes = Router();

routes.get('/health', (res, req) => {
    return res.status(200).send({ message: 'Server is running' });
})

routes.get('/repositories/:organization', RepositoriesController.listAllRepositoriesByOrg);

module.exports = routes;