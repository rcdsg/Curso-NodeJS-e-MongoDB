const dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    const connection = dbConnection();

    app.get('/noticias', function(req,res){

        connection.query("SELECT * FROM noticias", function(error, result){
            //res.send(result);
            res.render('noticias/noticias', {noticias: result});
        });

    });
}