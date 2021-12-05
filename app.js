const app = require('./config/server');
const rotaNoticias = require('./app/routes/noticias')(app);
const rotaHome = require('./app/routes/home')(app);
const rotaFormNot = require('./app/routes/formNoticia')(app);

app.listen(4000, function(req,res){
    console.log('Servidor rodando na porta 4000!');
});