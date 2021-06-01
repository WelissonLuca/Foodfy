const recipeData = require('../../data');

exports.home = (req, res) => res.render('admin/home', { items: recipeData });