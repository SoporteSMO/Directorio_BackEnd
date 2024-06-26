import express from "express";
import { listarLocales } from "../controller/localesController.js";

const localesRouter = express.Router();

localesRouter.get("/", listarLocales);

export default localesRouter;
