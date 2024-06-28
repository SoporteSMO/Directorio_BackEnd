import express from "express";
import {
    listarLocalesOrdenAlfabetico,
    localesCategorias,
} from "../controller/localesController.js";

const localesRouter = express.Router();

localesRouter.get("/categorias/:id", localesCategorias);
localesRouter.get("/", listarLocalesOrdenAlfabetico);

export default localesRouter;
