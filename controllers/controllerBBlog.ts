import { Request, Response } from "express"
import serviceBBlog from "../services/serviceBBlog"
import modelBBlog from "../models/modelBBlog";

class BBlogController {
	createBlog = (req:Request, res:Response) => {
		let service = new serviceBBlog<typeof modelBBlog>(modelBBlog);
		service.createBlog();

		return res.send("Create blog");
	}

	getBlogList = (req:Request, res:Response) => {

		return res.send("Get Blog List");
	}

}

export default new BBlogController()