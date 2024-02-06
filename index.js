const movies = require('./movies.json');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my favorite movie list');
});

app.get('/api/movies', (req, res) => {
  res.status(200).json(movies);
});

app.get('/api/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const foundMovie = movies.find(movie => movie.id === movieId);

  if (foundMovie) {
    res.status(200).json(foundMovie);
  } else {
    res.status(404).send('Not Found');
  }
});

const port = 6969;
app.listen(port, () => {
  console.log(`Le serveur est ouvert \n http://localhost:${port}/`);
});

module.exports = app;
