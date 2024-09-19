/**
 * descriçao: arquivo responsavel por toda a configuração e execucao do back-end 
 */

const app = require('./src/app');
const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log('Aplicação sendo executada na porta:', port);
});