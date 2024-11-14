const express = require('express');
const routes = require('./routes');

const app = express();

// Formato json para nossos dados
app.use(express.json());

// Traz as rotas
app.use(routes);

module.exports = app;