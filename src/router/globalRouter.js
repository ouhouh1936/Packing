import {
  baseController,
  mainController,
  whenController,
} from "../controller/globalController";

import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", baseController);
globalRouter.get("/main", mainController);
globalRouter.get("/when", whenController);
export default globalRouter;
