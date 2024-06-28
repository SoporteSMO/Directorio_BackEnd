import express from "express";
import { listarLocalesOrdenAlfabetico } from "../controller/localesController.js";

const localesRouter = express.Router();

localesRouter.get("/", listarLocalesOrdenAlfabetico);

export default listarLocalesOrdenAlfabetico;
