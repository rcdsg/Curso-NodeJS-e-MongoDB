const mySql = require('mysql');

module.exports = function(){
    return mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mSql@200822',
        database: 'portal_noticias'
    });
}