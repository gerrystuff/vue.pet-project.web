const mysql = require('mysql');

const database = {
    "host": "localhost",
    "port": "3306",
    "user": "root",
    "database": "proyectoWeb"
}

const pool = mysql.createConnection(database);

pool.connect((error) => {
    if (error)
        console.log("Error: ", error);
    else
        console.log("Database online.");

});

module.exports = pool;