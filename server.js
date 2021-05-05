const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const recipeData = require('./data');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'njk');
server.use(express.static('public'));
server.use(routes);

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/', (req, res) => res.render('home'));

server.get('/about', (req, res) => res.render('about'));

server.get('/recipes', (req, res) =>
  res.render('recipes', { items: recipeData })
);


server.get('/recipes/:index', (req, res) => {
  const recipes = [...recipeData]; 
  const recipeIndex = req.params.index;

  const recipe = recipes[recipeIndex];

  return res.render('description', { item: recipe });
});
server.use((req, res) => {
  res.status(404).render('not-found');
});

server.listen(4000, () => {
  console.log('Server Is Running');
});
