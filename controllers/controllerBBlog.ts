import { Request, Response } from "express";
import slugify from "slugify";
import CustomResponse from "../modules/responseObj";
import serviceBBlog from "../services/serviceBBlog";
import modelBBlog from "../models/modelBBlog";
import { T_Header, ServiceResponseResult } from "../shared/types"

type T_SearchBlog = { 
	title: string | null | undefined
}
class BBlogController {
	createBlog = async (req:Request, res:Response) => {
		const serviceName = "Get Blog";
		let response = new CustomResponse();
		let slug = req.params.slug ?? null;

		try{
			let preData = {
				title: "Hello world",
				detail: "ABCDE",
				image: "Pic",
				slug: "/aaa/"
			}

			let service = new serviceBBlog(modelBBlog);
			let result = await service.createBlog(preData);

			let responseData = {
				data: result
			}

			response.setResponse(serviceName, 200, "Success", true, responseData);
        	return res.status(response.statusCode).send(response);
		}catch(err){
			console.log(err);
			response.setCustomFailureResponse(serviceName, 500);
			return res.send(response);
		}
	}

    getBlog = async (req:Request, res:Response) => {
		const serviceName = "Get Blog";
		let response = new CustomResponse();
		let slug = req.params.slug ?? null;

		if(slug === null){
			response.setCustomFailureResponse(serviceName, 404);
        	return res.status(response.statusCode).send(response);
		}

        let service = new serviceBBlog(modelBBlog);
		let [result, error] = await service.getBlog(slug);
		if(error !== null) {
			response.setCustomFailureResponse(serviceName, 404);
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
			let queryParam = req.query as T_SearchBlog;
			let title = queryParam.title ?? null;

			let service = new serviceBBlog(modelBBlog);
			let [result, error] = await service.getBlogList(title, lastId, 10);
			if(error !== null) {
				console.log(error)
				response.setCustomFailureResponse(serviceName, 500);
				return res.status(response.statusCode).send(response);
			}
			let responseData = {
				data: result
			}
			response.setResponse(serviceName, 200, "Success", true, responseData);
			return res.send(response);
		}catch(err){
			console.log(err);
			response.setCustomFailureResponse(serviceName, 500);
			return res.send(response);
		}
    }
}

export default new BBlogController()