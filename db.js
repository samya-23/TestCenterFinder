const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root@localhost',
    password: 'Samya7$nsut26',
    database: 'test_center_finder'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

module.exports = connection;
