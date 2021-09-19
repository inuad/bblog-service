import { Model, model, Schema } from "mongoose";
import { T_BlogSchema, I_BBlog } from "./types/typeModelBBlog"

class BBlogModel implements I_BBlog {
	public blogSchema:Schema<T_BlogSchema>;
	private instanceModelBBlog:Model<T_BlogSchema>;

	constructor() {
		this.blogSchema = new Schema<T_BlogSchema>({
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
		try{
			const docBBlog = new this.instanceModelBBlog(data);
			await docBBlog.save();

			console.log(docBBlog);
		}catch(err){
			console.log(err);

		}
	}

    getBlog = async () => {
        
    }

    getBlogList = async () => {

    }

    searchBlog = async () => {
        try{
            const mBBlog = await this.instanceModelBBlog.find({ _id: "6146f853b3988223b689c256" })
            console.log(mBBlog)
        }catch(err){
            console.log(err);
        }
    }
}

export default new BBlogModel();