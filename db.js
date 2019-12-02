const mysql = require('mysql');

const pool = mysql.createPool({
    waitForConnections: false,
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'opus'
});

process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.error(err);
        process.exit(0);
    })
);

module.exports = pool;