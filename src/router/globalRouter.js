import {
  mainController,
  whenController,
  dessertController,
  crudController,
} from "../controller/globalController";

import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", mainController);
globalRouter.get("/when", whenController);
globalRouter.get("/crud", crudController);
globalRouter.get("/dessert", dessertController);

export default globalRouter;
