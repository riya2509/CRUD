import express from "express";
import appController from "../Controller/appContoller.js";
const appRoute = express.Router();

appRoute.get("/", appController.getData);
appRoute.get("/search", appController.search);
export default appRoute;
