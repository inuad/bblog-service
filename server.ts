import express, { Application } from "express"
import dotenv from "dotenv"

dotenv.config();
const app:Application = express();
const PORT = process.env.PORT || 8000;
import middlewareIndex from "./middlewares/middlewareIndex"
app.use(middlewareIndex);

import routeIndex from "./routes/routeIndex"
app.use(routeIndex);

app.listen(PORT, () => {
	console.log(`Start server at : ${PORT}`)
})