const recipeData = require('../../data');

exports.home = (req, res) => res.render('recipes/home', { items: recipeData });

exports.about = (req, res) => res.render('recipes/about');

exports.recipes = (req, res) =>
  res.render('recipes/recipes', { items: recipeData });

exports.descriptionRecipe = (req, res) => {
  const { id } = req.params;

  const findRecipe = recipeData.find((recipe) => recipe.id == id);

  if (!findRecipe) return res.send('Receita não encontrada');

  const recipe = {
    ...findRecipe,
  };

  return res.render('recipes/description', { item: recipe });
};
