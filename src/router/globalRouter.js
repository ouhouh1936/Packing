const {
  mainController,
  whenController,
  dessertController,
  crudController,
  storeMenuController,
  loginController,
  homeController,
} = require("../controller/globalController");

const express = require("express");

const globalRouter = express.Router();

globalRouter.get("/", mainController);

globalRouter.get("/home", homeController);
globalRouter.get("/when", whenController);
globalRouter.get("/crud", crudController);
globalRouter.get("/dessert", dessertController);

globalRouter.post("/login", loginController);
globalRouter.post("/d", storeMenuController);

module.exports = globalRouter;
