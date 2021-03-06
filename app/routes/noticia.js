module.exports = function(application){

    application.get('/noticia', function(req,res){

        const connection = application.config.dbConnection();
        const noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result){
            res.render('noticias/noticia', {noticia: result});
        });

    });
}