/**
 * descriçao: arquivo responsavel pela logica do CRUD Salas
 */
const db = require ('../config/database');

// => Metodo responsevel por criar uma nova Sala

exports.createSala = async(req, res) => {
    const { nome, descricao }= req.body;
    // eslint-disable-next-line no-unused-vars
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

// => Metodo responsevel por listar todas as Salas
exports.listAllSalas = async (req, res) => {
    const response = await db.query('SELECT * FROM sala ORDER BY nome');
    res.status(200).send(response.rows);
};
// => Metodo responsevel por listar a sala pelo ID
exports.findSalaById = async(req, res) =>{
    const salaId = parseInt(req.params.id);
    const response = await db.query ('SELECT * FROM sala WHERE id=$1', [salaId]);
    res.status(200).send(response.rows);
};

// => Metodo responsevel por listar a sala pelo ID
exports.updateById = async(req, res) => {
    const salaId = parseInt(req.params.id);
    const { nome, descricao }= req.body;
    // eslint-disable-next-line no-unused-vars
    const response = await db.query ( 'UPDATE sala SET nome = $1, descricao = $2 where id=$3', [nome, descricao, salaId] )

    res.status(200).send(
        {message: 'Alteração realizada com sucesso',
           body: {
            sala: {nome, descricao}
           } 
        },
    );
};

// => Metodo responsevel por listar a sala pelo ID
exports.deleteById = async(req, res) => {
    const salaId = parseInt(req.params.id);
    const { nome, descricao }= req.body;
    // eslint-disable-next-line no-unused-vars
    const response = await db.query('DELETE from sala WHERE id=$1', [salaId]);
    res.status(200).send({
        message: 'Sala deletada com sucesso',
        body: {
           sala: {nome, descricao} 
        },
    });
};