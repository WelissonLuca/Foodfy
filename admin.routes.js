const express = require("express");
const Admin = require('./src/controllers/Admin')

const routes = express.Router();

routes.get('/', (req, res) => res.redirects('/admin'));

routes.get("/admin", Admin.home);

module.exports = routes;