import express from "express";
import { getHome } from "../controllers/home/homeController.js";
import createDatabaseController from "../controllers/home/createDatabaseController.js";
const homeRouter = express.Router();

homeRouter.get("/", getHome);
homeRouter.post("/matches/create", createDatabaseController);

export default homeRouter;
