const express = require("express");
const Recipes = require('./src/controllers/Recipes')

const routes = express.Router();



routes.get("/", Recipes.home)
routes.get("/about",Recipes.about)
routes.get("/Recipes",Recipes.recipes)
routes.get("/Recipes/:id", Recipes.descriptionRecipe)

module.exports = routes;