const app = require('./config/server');

app.get('/', function(req,res){
    res.render('home/index');
})

app.get('/form', function(req,res){
    res.render('admin/form_add_noticia');
})

app.get('/noticias', function(req,res){
    res.render('noticias/noticias');
})

app.listen(4000, function(req,res){
    console.log('Servidor rodando na porta 4000!');
});