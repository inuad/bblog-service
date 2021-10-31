import { Model, model, Schema } from "mongoose";
import { T_BlogSchema, I_BBlogModel, ResultBlogSchema } from "./types/typeModelBBlog"

class BBlogModel implements I_BBlogModel {
	public blogSchema:Schema<T_BlogSchema>;
	private instanceModelBBlog:Model<T_BlogSchema>;

	constructor() {
		this.blogSchema = new Schema<T_BlogSchema>({
			slug: { type: String, required: true },
			title: { type: String, required: true },
            detail: { type: String, required: true },
            image: { type: String, required: false },
			created_at: { type: Date, required: true, default: new Date() },
			created_by: { type: String, required: false, default: "iNuad"},
		}, {
			versionKey: false
		})
		this.instanceModelBBlog = model<T_BlogSchema>('Blog', this.blogSchema);
	}

	createBlog = async (data: T_BlogSchema) => {
		// try{
		// 	const docBBlog = new this.instanceModelBBlog(data);
		// 	await docBBlog.save();

		// 	console.log(docBBlog);
		// }catch(err){
		// 	console.log(err);

		// }
	}

    getBlog = async (query: object): Promise<ResultBlogSchema> => {
        return new Promise(async (resolve, reject) => {
			try{
				const result = await this.instanceModelBBlog.findOne(query, {}, {sort: { "created_at" : -1 }})
				return resolve(result);
			}catch(err){
				return reject(err);
			}
		})
    }

    getBlogList = (query: object, limit:number = 10): Promise<ResultBlogSchema> => {
		return new Promise(async (resolve, reject) => {
			try{
				const result = await this.instanceModelBBlog.find(query, {}, {sort: { "created_at" : -1 }}).limit(limit)
				return resolve(result);
			}catch(err){
				return reject(err);
			}
		})
    }
}

export default new BBlogModel();