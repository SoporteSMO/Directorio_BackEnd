import express from "express";
import { listarPublicidades } from "../controller/publicidadesController.js";

const publicidadRouter = express.Router();

publicidadRouter.get("/", listarPublicidades);

export default publicidadRouter;
