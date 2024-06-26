import express from "express";
import { listarEventos } from "../controller/eventosController.js";

const eventosRouter = express.Router();

eventosRouter.get("/", listarEventos);

export default eventosRouter;
