import { I_BBlogModel, T_BlogSchema } from "../models/types/typeModelBBlog"
import { I_BBlogService } from "./types/publicServiceBBlog"
import { T_Header, ServiceResponseResult } from "../shared/types"

export default class BBlogService implements I_BBlogService{
	constructor(
		protected mBBlog: I_BBlogModel
	){}

	createBlog = async (data: T_BlogSchema): Promise<ServiceResponseResult> => {
        try{
			let result = await this.mBBlog.createBlog(data);
			return [result, null];
		}catch(err){
			return [null, err];
		}
	}

    getBlog = async (slug: string): Promise<ServiceResponseResult> => {
		try{
			let query = {
				slug: slug
			}

			let result = await this.mBBlog.getBlog(query);
			return [result, null];
		}catch(err){
			return [null, err];
		}
    }

    getBlogList = async (lastId: T_Header, title?: string|null): Promise<ServiceResponseResult> => {
		try{
			let query = {}
			if(lastId !== null){
				query = {
					...query,
					_id: { $lte : lastId }
				}
			}

			if(title !== undefined && title !== null){
				query = {
					...query,
					title: new RegExp(title, "g")
				}
			}

			let result = await this.mBBlog.getBlogList(query);
			return [result, null];
		}catch(err){
			return [null, err];
		}
    }
}