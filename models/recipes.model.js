const fs = require("fs");

exports.fetchRecipes = (query, callback) => {
  fs.readFile(`data/data.json`, "utf-8", (err, recipesArray) => {
    if (err) {
      console.log(err);
    } else {
      const recipes = JSON.parse(recipesArray);

      callback(null, recipes);
    }
  });
};

exports.fetchRecipeByID = (id) => {};

exports.addRecipe = (recipeBody) => {};
