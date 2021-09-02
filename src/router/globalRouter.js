const express = require("express");
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

  loginController,
  homeController,

  crudBaseController,
  storeCreateController,
  storeController,
} = require("../controller/globalController");

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

/////////crud/////////////////
globalRouter.get("/crudBase", crudBaseController);
globalRouter.get("/sc", storeCreateController);

globalRouter.post("base", storeController);

module.exports = globalRouter;
