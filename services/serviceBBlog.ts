import { I_BBlog } from "../models/types/typeModelBBlog"

export default class BBlogService<T extends I_BBlog> {
	constructor(
		protected mBBlog: T
	){}

	createBlog = () => {
        let data = {
            title: "Hello world",
            detail: "ABCDE",
            image: "Pic",
        }
		this.mBBlog.createBlog(data);
	}

    getBlog = () => {
        this.mBBlog.getBlog();
    }

    getBlogList = async () => {
        let result = await this.mBBlog.getBlogList();
		return result;
    }

    searchBlog = () => {
        if(this.mBBlog.searchBlog){
            this.mBBlog.searchBlog();
        }
    }
}