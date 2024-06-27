import express from "express";
import { listarTeatros } from "../controller/teatrosController.js";

const teatroRouter = express.Router();

teatroRouter.get("/", listarTeatros);

export default teatroRouter;
