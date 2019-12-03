const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'esparta',
    user: 'bdac150',
    password: 'Vyowl1',
    database: 'bdac150'
});

process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.error(err);
        process.exit(0);
    })
);

module.exports = pool;