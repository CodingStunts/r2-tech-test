const supertest = require("supertest");
const server = require("../server");

const request = supertest(server);

test("/api", async () => {
  const { body } = await request.get("/api").expect(200);
  expect(body.message).toBe("ok");
});

describe("getCommentsByReview() GET /api/reviews/:review_id/comments", () => {
  test("GET /api/recipes", async () => {
    const { body } = await request.get("/api/recipes").expect(200);
    expect(Array.isArray(body)).toBe(true);
    expect(body[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        imageUrl: expect.any(String),
        instructions: expect.any(String),
        ingredients: expect.any(Array),
      })
    );
  });
});

describe("getCommentsByReview() GET /api/reviews/:review_id/comments", () => {
  test("GET /api/recipes/:id", async () => {
    const { body } = await request.get("/api/recipes/1").expect(200);
    expect(typeof body).toBe("object");
    expect(body).toEqual({
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
});

describe("getCommentsByReview() GET /api/reviews/:review_id/comments", () => {
  test("POST /api/", async () => {
    const { body } = await request.post("/api/recipes").expect(201);
    expect(body.message).toBe("ok");
  });
});
