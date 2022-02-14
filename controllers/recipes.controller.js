const {
  fetchRecipes,
  fetchRecipeByID,
  addRecipe,
} = require("../models/recipes.model");

exports.getRecipes = (req, res, next) => {
  const query = req.query;
  fetchRecipes(query, (err, recipes) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send({ recipes });
    }
  });
};

exports.getRecipeByID = (req, res, next) => {
  const { id } = req.params;
  fetchRecipeByID(id, (err, recipe) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send({ recipe });
    }
  });
};

exports.postRecipe = (req, res, next) => {
  addRecipe()
    .then((recipe) => {
      res.status(201).send({ recipe });
    })
    .catch((error) => {
      next(error);
    });
};
