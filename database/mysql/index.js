const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'townhall',
  database: 'pokemon'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ', err);
    return;
  }

  console.log('Connected to the MySQL server'); 
});

module.exports = connection;
