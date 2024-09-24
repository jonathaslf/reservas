/**
 * descriçao: arquivo responsavel pela rotas da api
 */
const router = require ('express-promise-router')();
const salaController = require('../controllers/sala.controller');

// => Definido as rotas do crud - sala

// =>Rota responsavel por criar uma nova "Sala" : (POST): localhost:3000/api/sala
router.post('/salas', salaController.createSala);


// => Rota responsavel por listar todas as "Salas" : (GET) : localhost:3000/api/salas 
router.get('/salas', salaController.listAllSalas);

// => Rota responsavel por listar a Sala pelo ID : (GET) : localhost:3000/api/salas/id
router.get('/salas/:id', salaController.findSalaById);

module.exports = router;