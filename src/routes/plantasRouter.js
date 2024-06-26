import express from "express";
import { listarPlantas } from "../controller/plantasController.js";

const plantasRouter = express.Router();

plantasRouter.get("/", listarPlantas);

export default plantasRouter;
