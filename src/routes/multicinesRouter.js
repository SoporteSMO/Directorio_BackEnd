import express from "express";
import { listarMulticines } from "../controller/multicinesController.js";

const multicinesRouter = express.Router();

multicinesRouter.get("/", listarMulticines);

export default multicinesRouter;
