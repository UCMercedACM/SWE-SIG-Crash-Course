import express from 'express';
const pokemonRouter = express.Router();
import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';
import { logger } from '../middlewares.js';

let pokemons = [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=20')
  .then(response => response.json())
  .then(data => {
    const formattedArray = data.results.map(pokemon => {
      const newPokemon = { id: uuidv4(), pokemon: pokemon.name };
      return newPokemon;
    });
    console.log(formattedArray, 'fetch is done');
    pokemons = formattedArray;
  });

pokemonRouter.use(logger);

pokemonRouter.get('/', (req, res) => {
  console.log(pokemons, 'fetched all pokes');
  res.json(pokemons);
});

pokemonRouter.post('/', (req, res) => {
  console.log(req.body.pokemonData);
  pokemons.push({ id: uuidv4(), pokemon: req.body.pokemonData });
  res.json(pokemons);
});

pokemonRouter
  .route('/:pokemonID')
  .get((req, res) => {
    const data = pokemons.find(pokemon => pokemon.id === req.params.pokemonID);
    console.log(data, 'pokemon chosen');
    res.json(data.pokemon);
  })
  .put((req, res) => {
    const newPokemonData = req.body.pokemonData;
    const index = pokemons.findIndex(
      pokemon => pokemon.id === req.params.pokemonID
    );
    pokemons[index].pokemon = newPokemonData;
    res.json(pokemons);
  })
  .delete((req, res) => {
    pokemons = pokemons.filter(function (pokemon) {
      return pokemon.id !== req.params.pokemonID;
    });
    res.json(pokemons);
  });

export default pokemonRouter;
