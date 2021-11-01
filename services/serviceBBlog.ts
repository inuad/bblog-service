import { I_BBlogModel } from "../models/types/typeModelBBlog"
import { I_BBlogService } from "../services/publicServiceBBlog"
import { T_Header, ServiceResponseResult } from "../shared/types"

export default class BBlogService implements I_BBlogService{
	constructor(
		protected mBBlog: I_BBlogModel
	){}

	// createBlog = () => {
        // let data = {
        //     title: "Hello world",
        //     detail: "ABCDE",
        //     image: "Pic",
        // }
		// this.mBBlog.createBlog(data);
	// }

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