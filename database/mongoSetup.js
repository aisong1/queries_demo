const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon');

let pokemonSchema = mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  trait: String
});

let Pokemon = mongoose.model('Pokemon', pokemonSchema);

let addToPokedex = (pokemon, callback) => {
  // TODO: This function should take one or more pokemon 
  // and save this into our database

  Pokemon.create(pokemon)
    .then((results) => {
      callback(null, results);
    })
    .catch((err) => {
      callback(err);
    });

};

let getAllPokemon = (callback) => {
  // TODO: This function should fetch all pokemon in our database

  Pokemon.find({}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
  
};

module.exports = {
  addToPokedex,
  getAllPokemon
}