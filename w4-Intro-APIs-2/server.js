import express from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
  res.send('hello there');
});

import pokemonRouter from './routes/pokemon.js';
// const covidRouter = require('./routes/covid');
// const basketballPlayersRouter = require('./routes/basketballPlayers');

app.use('/pokemons', pokemonRouter);
// app.use('/covid', covidRouter);
// app.use('/basketballPlayers', basketballPlayersRouter);
console.log('server is running');
app.listen(3000);
