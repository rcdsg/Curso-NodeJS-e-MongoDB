const mySql = require('mysql');

const connectMySQL = function(){
    console.log('Conexão com bd estabelecida com sucesso!');
    return mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mSql@200822',
        database: 'portal_noticias'
    });
};

module.exports = function(){
    return connectMySQL;
}