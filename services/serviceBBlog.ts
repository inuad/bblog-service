import { I_BBlog } from "../models/types/typeModelBBlog"

export default class BBlogService<T extends I_BBlog> {
	constructor(
		protected mBBlog: T
	){}

	createBlog = () => {
		this.mBBlog.createBlog()
	}


}