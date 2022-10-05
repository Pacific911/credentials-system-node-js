var mysql = require('mysql');
const { compileClientWithDependenciesTracked } = require('pug');

var con = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_system'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Database Connected...');
});
module.exports = con;