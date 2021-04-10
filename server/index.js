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

});

app.get('/mysqlPokemon', (req, res) => {
  // TODO: Add a GET request handler that will 
  // fetch all pokemon from MySQL

});

app.post('/mongoosePokemon', (req, res) => {
  // TODO: Add POST request handler that will 
  // add a new pokemon to our MongoDB "Pokedex"

});

app.get('/mongoosePokemon', (req, res) => {
  // TODO: Add POST request handler that will 
  // fetch all pokemon from MongoDB

})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
