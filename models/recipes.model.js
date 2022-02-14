const fs = require("fs");

exports.fetchRecipes = (query, callback) => {
  fs.readFile(`data/data.json`, "utf-8", (err, recipesData) => {
    if (err) {
      console.log(err);
    } else {
      const recipes = JSON.parse(recipesData);
      if (!query) {
        callback(null, recipes);
      } else {
        const filteredRecipes = recipes.filter((recipe) =>
          recipe.ingredients.some(
            (ingredient) => ingredient.name === query.exclude_ingredients
          )
        );

        console.log(filteredRecipes.length);
        callback(null, filteredRecipes);
      }
    }
  });
};

exports.fetchRecipeByID = (id, callback) => {
  fs.readFile(`data/data.json`, "utf-8", (err, recipesData) => {
    if (err) {
      console.log(err);
    } else {
      const recipes = JSON.parse(recipesData);
      const recipeByID = recipes.filter(
        (recipe) => recipe.id === `recipe-${id}`
      );
      callback(null, recipeByID);
    }
  });
};

exports.addRecipe = (recipeBody) => {};
