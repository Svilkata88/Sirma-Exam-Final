import express from "express";
import getMatchDetailsController from "../controllers/getMatchDetailsController.js";
const matchRouter = express.Router();

matchRouter.get("/:id", getMatchDetailsController);

export default matchRouter;
