const app = require('./config/server');


app.listen(4000, function(req,res){
    console.log('Servidor rodando na porta 4000!');
});