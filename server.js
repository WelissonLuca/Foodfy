const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

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

server.use((req, res) => {
  res.status(404).render('not-found');
});

server.listen(3000, () => {
  console.log('Server Is Running');
});
