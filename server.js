const express = require('express');
const nunjucks = require('nunjucks');
const recipeData = require('./data');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'njk');
server.use(express.static('public'));

nunjucks.configure('src/views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/', (req, res) => res.render('recipes/home', { items: recipeData }));

server.get('/about', (req, res) => res.render('recipes/about'));

server.get('/recipes', (req, res) =>
  res.render('recipes/recipes', { items: recipeData })
);

server.get('/recipes/:id', (req, res) => {
  const { id } = req.params;

  const findRecipe = recipeData.find((recipe) => recipe.id == id);

  if (!findRecipe) return res.send('Receita não encontrada');

  const recipe = {
    ...findRecipe,
  };

  return res.render('recipes/description', { item     : recipe });
});
server.use((req, res) => {
  res.status(404).render('not-found');
});

server.listen(3000, () => {
  console.log('Server Is Running');
});
