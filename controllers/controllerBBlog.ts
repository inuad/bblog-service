import { Request, Response } from "express"
import serviceBBlog from "../services/serviceBBlog"
import modelBBlog from "../models/modelBBlog";

class BBlogController {
	createBlog = (req:Request, res:Response) => {
		let service = new serviceBBlog<typeof modelBBlog>(modelBBlog);
		service.createBlog();

		return res.send("Create blog");
	}

    getBlog = (req:Request, res:Response) => {
        let service = new serviceBBlog<typeof modelBBlog>(modelBBlog);
		service.getBlog();

        return res.send(`Get Blog : ${req.params.slug}`);
    }

    getBlogList = (req:Request, res:Response) => {
        let service = new serviceBBlog<typeof modelBBlog>(modelBBlog);
		service.getBlogList();

        return res.send("Get Blog List");
    }
    
    searchBlog = (req:Request, res:Response) => {
        let service = new serviceBBlog<typeof modelBBlog>(modelBBlog);
		service.searchBlog();

        return res.send("Search Blog");
    }
}

export default new BBlogController()