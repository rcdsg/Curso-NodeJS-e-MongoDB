module.exports = function(application){

    application.get('/noticias', function(req,res){

        const connection = application.config.dbConnection();
        const noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result){
            res.render('noticias/noticias', {noticias: result});
        });

    });
}