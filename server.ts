import express, { Application } from "express"
import dotenv from "dotenv"

dotenv.config();
const app:Application = express();

import middlewareIndex from "./middlewares/middlewareIndex"
app.use(middlewareIndex);

import routeIndex from "./routes/routeIndex"
app.use(routeIndex);

app.listen("3000", () => {
	console.log("Start server at :3000")
})