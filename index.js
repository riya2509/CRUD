import express from "express";
import appRoute from "./app/routes/appRoute.js";
const app = express();
const PORT = 5000;
app.use(express.json());
app.use("/api", appRoute);
app.listen(PORT, () => console.log(`App started on Port ${PORT}`));
