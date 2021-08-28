const {
  mainController,
  whenController,
  dessertController,
  crudController,
} = require("../controller/globalController");

const express = require("express");

const globalRouter = express.Router();

globalRouter.get("/", mainController);
globalRouter.get("/when", whenController);
globalRouter.get("/crud", crudController);
globalRouter.get("/dessert", dessertController);

module.exports = globalRouter;
