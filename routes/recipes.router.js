const recipesRouter = require("express").Router();
const {
  getRecipes,
  getRecipeByID,
  postRecipe,
} = require("../controllers/recipes.controller");

recipesRouter.route("/").get(getRecipes).post(postRecipe);

recipesRouter.route("/:id").get(getRecipeByID);

module.exports = recipesRouter;
