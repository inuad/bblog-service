import { Request, Response } from "express";
import slugify from "slugify";
import CustomResponse from "../modules/responseObj";
import serviceBBlog from "../services/serviceBBlog";
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

    getBlogList = async (req:Request, res:Response) => {
		const serviceName = "Get Blog List"
		let response = new CustomResponse();
        let service = new serviceBBlog<typeof modelBBlog>(modelBBlog);
		let result = {
			data: await service.getBlogList()
		}

		response.setResponse(serviceName, 200, "Success", true, result);
        return res.send(response);
    }
    
    searchBlog = (req:Request, res:Response) => {
        let service = new serviceBBlog<typeof modelBBlog>(modelBBlog);
		service.searchBlog();

        return res.send("Search Blog");
    }
}

export default new BBlogController()