const apiRouter = require("express").Router();

apiRouter.get("/", (req, res) => {
  res.json({ message: "ok" });
});

apiRouter.get("/recipes", (req, res) => {
  res.json({ message: "recipes" });
});

apiRouter.get("/recipes/:id", (req, res) => {
  res.json({ message: "recipes by ID" });
});

apiRouter.post("/recipes", (req, res) => {
  res.json({ message: "posted recipe" });
});

module.exports = apiRouter;
