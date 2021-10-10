import express, { Request, Response, Router } from "express"
import routeBBlog from "./routeBBlog"

const route:Router = express.Router();
route.use("/api/v1/blog/", routeBBlog)

route.all("*", (req:Request, res:Response) => (res.status(404).send()));
export default route