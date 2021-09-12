import { Model, model, Schema } from "mongoose";
import { T_BlogSchema, I_BBlog } from "./types/typeModelBBlog"

class BBlogModel implements I_BBlog {
	public blogSchema:Schema<T_BlogSchema>;
	private instanceModelBBlog:Model<T_BlogSchema>;

	constructor() {
		this.blogSchema = new Schema<T_BlogSchema>({
			title: { type: String, required: true },
			created_at: { type: Date, required: false }
		}, {
			versionKey: false
		})
		this.instanceModelBBlog = model<T_BlogSchema>('Blog', this.blogSchema);
	}

	createBlog = async () => {
		try{
			const docBBlog = new this.instanceModelBBlog({ title: "Hello" });
			await docBBlog.save()

			console.log(docBBlog)
		}catch(err){
			console.log(err)

		}
	}
}

export default new BBlogModel();