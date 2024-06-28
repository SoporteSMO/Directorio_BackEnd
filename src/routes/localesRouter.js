import express from "express";
import {
    listarLocalesOrdenAlfabetico,
    localesCategorias,
    localesPlantas,
} from "../controller/localesController.js";

const localesRouter = express.Router();

localesRouter.get("/", listarLocalesOrdenAlfabetico);
localesRouter.get("/categorias/:id", localesCategorias);
localesRouter.get("/plantas/:id", localesPlantas);

export default localesRouter;
