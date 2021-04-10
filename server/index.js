const express = require('express');
const morgan = require('morgan');
// const db = require('../database/mysqlSetup'); /* MYSQL CONNECTION */
// const { addToPokedex, getAllPokemon } = require('../database/mongoSetup'); /* MONGODB CONNECTION */

const exampleData = require('../exampleData.json');

const app = express();
const PORT = 3000;

app.use(morgan('tiny'));
app.use(express.json());

app.post('/mysqlPokemon', (req, res) => {
  // TODO: Add a POST request handler that will 
  // add a new pokemon to our MySQL "Pokedex"
  
  const { id, name, type, trait } = req.body;
  const queryString = 'INSERT INTO pokemon (id, name, type, trait) VALUES(?, ?, ?, ?)';

  db.query(queryString, [id, name, type, trait], (err, results) => {
    if (err) {
      console.error('Failed to insert Pokemon into MySQL: ', err);
      res.sendStatus(500);
    } else {
      res.status(200).send('Pokemon successfully stored!');
    }
  });

});

app.get('/mysqlPokemon', (req, res) => {
  // TODO: Add a GET request handler that will 
  // fetch all pokemon from MySQL
  
  const queryString = 'SELECT * FROM pokemon';
  db.query(queryString, (err, results) => {
    if (err) {
      console.error('Failed to fetch pokemon from MySQL: ', err);
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });

});

app.post('/mongoosePokemon', (req, res) => {
  // TODO: Add POST request handler that will 
  // add a new pokemon to our MongoDB "Pokedex"

  addToPokedex(exampleData, (err, results) => {
    if (err) {
      console.error('Failed to insert Pokemon into MongoDB: ', err);
      res.sendStatus(500);
    } else {
      res.status(200).send('Pokemon successfully stored!');
    }
  })

});

app.get('/mongoosePokemon', (req, res) => {
  // TODO: Add POST request handler that will 
  // fetch all pokemon from MongoDB
  
  getAllPokemon((err, results) => {
    if (err) {
      console.error('Failed to fetch pokemon from MongoDB: ', err);
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  });

})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
