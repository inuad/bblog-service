import express, { Router } from "express"
import controller from "../controllers/controllerBBlog"

const route:Router = express.Router();
route.get("/createBlog", controller.createBlog);
route.get("/getBlogList", controller.getBlogList);

export default route