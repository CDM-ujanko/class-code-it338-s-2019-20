const mysql = require('mysql');

class SqlService {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'it338'
    });

    console.log('The constructor in SqlService');
    this.connection.connect();

    this.createCharacters();
  }

  createCharacters () {
    console.log('Creating chars!');

    this.connection.query(`CREATE TABLE IF NOT EXISTS chars (
      id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      power VARCHAR(200) NOT NULL,
      PRIMARY KEY (id)
    )`, (err, res, field) => {
      console.log('Created DB', err, res, field);
    });


    console.log('Last line in create chars!');
  }

  getCharacter(id, callback) {
    // Note: instead of directly adding param to the query we are passing it to the
    // query method,  this is much safer because it escape the parameters.
    // For more read the documentation: https://github.com/mysqljs/mysql
    this.connection.query(`SELECT * FROM chars WHERE id = ?`, [id], callback)
  }

  createCharacter(name, power, callback) {
    this.connection.query(`INSERT INTO chars SET ?`, {name: name, power: power}, callback);
  }

  getCharacters(callback) {
    this.connection.query('SELECT * FROM chars;', callback)
  }

  closeConnection() {
    this.connection.end();
  }

}

module.exports = new SqlService();