import express, { Request, Response, Router } from "express"
import routeBBlog from "./routeBBlog"

const route:Router = express.Router();
route.use("/api/v1/blog/", routeBBlog)

export default route