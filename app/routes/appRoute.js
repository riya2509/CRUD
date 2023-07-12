import express from "express";
import appController from "../Controller/appContoller.js";
const appRoute = express.Router();

appRoute.get("/", appController.getData);
export default appRoute;
