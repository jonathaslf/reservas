/**
 * descriçao: arquivo responsavel por fazer a conexao com server.js 
 */

const express = require('express');
const cors = require('cors');

const app = express();

//=> Rotas da API (Reservas):
const index = require('./routes/index');
//const reservaRoute = require('./routes/reservas.routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cors());

app.use(index);
//app.use('/api/', reservaRoute);

module.exports = app;