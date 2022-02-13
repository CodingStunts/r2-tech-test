const apiRouter = require("express").Router();
const recipesRouter = require("./recipes.router");

apiRouter.get("/", (_, res) => {
  res.status(200).json({ message: "Server is online." });
});

apiRouter.use("/recipes", recipesRouter);

module.exports = apiRouter;
