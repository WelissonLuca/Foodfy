const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require('./recipes.routes');
const admin = require('./admin.routes');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'njk');
server.use(express.static('public'));
nunjucks.configure('src/views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.use(recipes)
server.use(admin)
server.use((req, res) => {
  res.status(404).render('not-found');
});

server.listen(3000, () => {
  console.log('Server Is Running');
});
