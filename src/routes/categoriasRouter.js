import express from "express";
import { listarCategorias } from "../controller/categoriasController.js";

const categoriasRouter = express.Router();

categoriasRouter.get("/", listarCategorias);

export default categoriasRouter;
