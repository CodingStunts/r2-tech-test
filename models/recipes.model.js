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
          recipe.ingredients.every(
            (ingredient) => ingredient.name !== query.exclude_ingredients
          )
        );
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

//Removed from live code as was rewriting the entire data.json with "uft-8". Didn't complete anyway.
/* exports.addRecipe = (recipeBody, callback) => {
  fs.writeFile(`data/data.json`, "utf-8", (err, newRecipeData) => {
    if (err) {
      console.log(err);
    } else {
      const newRecipe = newRecipeData;
    }
  });
}; */
