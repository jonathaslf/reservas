/**
 * descriçao: arquivo responsavel pela rotas da api
 */
const router = require ('express-promise-router')();
const reservaController = require('../controllers/reservas.controller');

// => Definido as rotas do crud - resevas

//Rota responsavel por criar uma nova "Sala" : (POST): localhost:3000/api/reservas
router.post('/reservas', reservaController.createSala);
module.exports = router;