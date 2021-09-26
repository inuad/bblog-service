import { Request, Response } from "express";
import slugify from "slugify";
import CustomResponse from "../modules/responseObj";
import serviceBBlog from "../services/serviceBBlog";
import modelBBlog from "../models/modelBBlog";

type T_QueryParam = string | null | undefined
type T_SearchBlog<T> = T extends object
? { 
	title: T_QueryParam
}
: never

class BBlogController {
	createBlog = (req:Request, res:Response) => {
		let service = new serviceBBlog(modelBBlog);
		// service.createBlog();

		return res.send("Create blog");
	}

    getBlog = async (req:Request, res:Response) => {
		const serviceName = "Get Blog";
		let response = new CustomResponse();
		let slug = req.params.slug ?? null;

		if(slug === null){
			response.setResponse(serviceName, 400, "Failed", true, null);
        	return res.send(response);
		}

        let service = new serviceBBlog(modelBBlog);
		let result = {
			data: await service.getBlog(slug)
		}

		response.setResponse(serviceName, 200, "Success", true, result);
        return res.send(response);
    }

    getBlogList = async (req:Request, res:Response) => {
		const serviceName = "Get Blog List"
		let lastId = req.headers.id ?? null;
		let queryParam = req.query as T_SearchBlog<typeof req.query>;
		let title:T_QueryParam = queryParam.title ?? null;

		let response = new CustomResponse();
        let service = new serviceBBlog(modelBBlog);
		let result = {
			data: await service.getBlogList(lastId, title)
		}

		response.setResponse(serviceName, 200, "Success", true, result);
        return res.send(response);
    }
}

export default new BBlogController()