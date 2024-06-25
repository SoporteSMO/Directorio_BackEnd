import express from "express";
import { listarVias } from "../controller/viasController.js";

const viasRouter = express.Router();

viasRouter.get("/", listarVias);

export default viasRouter;
