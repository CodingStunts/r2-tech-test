const supertest = require("supertest");
const server = require("../server");
const request = supertest(server);

test("/api", async () => {
  const { body } = await request.get("/api").expect(200);
  expect(body.message).toBe("Server is online.");
});

describe("getRecipes() GET /api/recipes", () => {
  test("getRecipes returns an array of all recipes.", async () => {
    const { body } = await request.get("/api/recipes").expect(200);
    expect(Array.isArray(body.recipes)).toBe(true);
    expect(body.recipes.length).toBe(100);
    expect(body.recipes[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        imageUrl: expect.any(String),
        instructions: expect.any(String),
        ingredients: expect.any(Array),
      })
    );
  });
  test("getRecipes returns an array of all recipes, based on query criteria.", async () => {
    const { body } = await request
      .get("/api/recipes?exclude_ingredients=strawberries")
      .expect(200);
    expect(Array.isArray(body.recipes)).toBe(true);
    expect(body.recipes.length).toBe(82);
    expect(body.recipes[0].ingredients).not.toContain({ name: "strawberries" });
    expect(body.recipes[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        imageUrl: expect.any(String),
        instructions: expect.any(String),
        ingredients: expect.any(Array),
      })
    );
  });
});

describe("getRecipeByID() GET /api/recipes/:id", () => {
  test("getRecipeByID returns all details of the recipe with that ID.", async () => {
    const { body } = await request.get("/api/recipes/1").expect(200);
    expect(typeof body.recipe).toBe("object");
    expect(body.recipe[0]).toEqual({
      id: "recipe-1",
      imageUrl: "http://www.images.com/15",
      instructions: "spin it, twist it, pull it, flick it... bop it!",
      ingredients: [
        { name: "apple juice", grams: 71 },
        { name: "coffee", grams: 35 },
        { name: "raisins", grams: 183 },
        { name: "apple juice", grams: 173 },
      ],
    });
  });
  test("getRecipeByID returns all details of the recipe with that ID. Second confirmation.", async () => {
    const { body } = await request.get("/api/recipes/71").expect(200);
    expect(typeof body).toBe("object");
    expect(body.recipe[0]).toEqual({
      id: "recipe-71",
      imageUrl: "http://www.images.com/5",
      instructions:
        "60 seconds on the highest setting your blender has, or until a smooth paste has formed",
      ingredients: [
        { name: "lemon juice", grams: 128 },
        { name: "cinnamon", grams: 155 },
        { name: "kale", grams: 18 },
      ],
    });
  });
});
//Ran out of time to finish post
/* describe("postRecipe() POST /api/recipes", () => {
  test("POST /api/recipes", async () => {
    const { body } = await request.post("/api/recipes").expect(201);
    expect(body).toBe("*new recipe id*");
  });
});
 */
