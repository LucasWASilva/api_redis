const { Router } = require('express');
const CacheMiddleware = require('./middlewares/cacheMiddleware');

const RepositoriesController = require('./controllers/RepositoriesController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).send({ message: 'Server is running' });
})

routes.get('/repositories/:organization', CacheMiddleware, RepositoriesController.listAllRepositoriesByOrg);

module.exports = routes;