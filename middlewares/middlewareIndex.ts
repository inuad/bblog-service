import express, { Router } from "express"
import middlewareMongo from "./middlewareMongo"

const route:Router = express.Router();
route.use("/", middlewareMongo)

export default route