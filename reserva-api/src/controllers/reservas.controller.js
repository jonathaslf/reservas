/**
 * descriçao: arquivo responsavel pela logica do CRUD Salas
 */
const db = require ('../config/database');

// => Metodo responsevel por criar uma nova Sala

exports.createSala = async(req, res) => {
    const { nome, descricao }= req.body;
    const { rows } = await db.query(
        "INSERT INTO sala (nome, descricao) VALUES ($1, $2)", 
        [nome, descricao]
    );
    res.status(201).send({
        message: 'Gravado com sucesso',
        body: {
            sala: {nome, descricao}
        },
    });
};