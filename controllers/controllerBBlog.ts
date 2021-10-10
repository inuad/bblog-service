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
			response.set404(serviceName);
        	return res.status(response.statusCode).send(response);
		}

        let service = new serviceBBlog(modelBBlog);
		let result = await service.getBlog(slug);

		if(result === null) {
			response.set404(serviceName);
        	return res.status(response.statusCode).send(response);
		}

		let responseData = {
			data: result
		}

		response.setResponse(serviceName, 200, "Success", true, responseData);
        return res.status(response.statusCode).send(response);
    }

    getBlogList = async (req:Request, res:Response) => {
		const serviceName = "Get Blog List"
		let response = new CustomResponse();

		try{
			let lastId = req.headers.id ?? null;
			if(lastId === ''){
				lastId = null;
			}
			let queryParam = req.query as T_SearchBlog<typeof req.query>;
			let title:T_QueryParam = queryParam.title ?? null;

			let service = new serviceBBlog(modelBBlog);
			let [result, error] = await service.getBlogList(lastId, title);
			if(error !== null) {
				console.log(error)
				response.set500(serviceName);
				return res.status(response.statusCode).send(response);
			}
			let responseData = {
				data: result
			}
			response.setResponse(serviceName, 200, "Success", true, responseData);
			return res.send(response);
		}catch(err){
			console.log(err);
			response.set500(serviceName);
			return res.send(response);
		}
    }
}

export default new BBlogController()