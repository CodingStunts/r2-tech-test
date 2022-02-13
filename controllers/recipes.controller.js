const {
  fetchRecipes,
  fetchRecipeByID,
  addRecipe,
} = require("../models/recipes.model");

exports.getRecipes = (req, res, next) => {
  fetchRecipes();
};

exports.getRecipeByID = (req, res, next) => {
  const { id } = req.params;
  fetchRecipeByID(id);
};

exports.postRecipe = (req, res, next) => {
  addRecipe();
};
