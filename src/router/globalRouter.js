const {
  mainController,
  whenController,
  dessertController,
  fastController,
  lunchBoxController,
  porkController,
  chinaController,
  ggimController,
  snackBarController,

  storeMenuController,
  loginController,
  homeController,
} = require("../controller/globalController");

const express = require("express");

const globalRouter = express.Router();

globalRouter.get("/", mainController);

globalRouter.get("/home", homeController);
globalRouter.get("/when", whenController);

//////////menu//////////////
globalRouter.get("/dessert", dessertController);
globalRouter.get("/fast", fastController);
globalRouter.get("/lunchBox", lunchBoxController);
globalRouter.get("/pork", porkController);
globalRouter.get("/china", chinaController);
globalRouter.get("/ggim", ggimController);
globalRouter.get("/snackBar", snackBarController);

globalRouter.post("/login", loginController);
globalRouter.post("/d", storeMenuController);

module.exports = globalRouter;
