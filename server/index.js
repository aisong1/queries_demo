const express = require('express');
const morgan = require('morgan');
// const db = require('../database/mysqlSetup'); /* MYSQL CONNECTION */
// const { addToPokedex, getAllPokemon } = require('../database/mongoSetup'); /* MONGODB CONNECTION */

const app = express();
const PORT = 3000;

app.use(morgan('tiny'));
app.use(express.json());

app.post('/mysqlPokemon', (req, res) => {

});

app.get('/mysqlPokemon', (req, res) => {

});

app.post('/mongoosePokemon', (req, res) => {

});

app.get('/mongoosePokemon', (req, res) => {

})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
