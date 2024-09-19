/**
 * descriçao: arquivo responsavel pela chamada da api na aplicação no lado do back-end 
 */

const express = require('express');
const router = express.Router();

router.get('/api' , (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem vindo a api Node.js + Postgres',
        version: '1.0.0'
    });
});

module.exports=router;
