import express, { Router } from "express"
import controller from "../controllers/controllerBBlog"

const route:Router = express.Router();
route.get("/create", controller.createBlog);
route.get("/list", controller.getBlogList);
route.get("/search", controller.searchBlog);

route.get("/:slug", controller.getBlog);

export default route