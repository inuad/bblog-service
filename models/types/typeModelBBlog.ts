import { Document } from "mongoose";

type T_BlogSchema = {
	slug: string,
	title: string,
    detail: string,
    image: string,
	created_at?: Date
    created_by?: string,
}

type ResultBlogSchema = Document<T_BlogSchema>[] | (Document<T_BlogSchema> | null)
interface I_BBlogModel {
	createBlog: (data: T_BlogSchema) => Promise<ResultBlogSchema>;
    getBlog: (query: object) => Promise<ResultBlogSchema>;
    getBlogList: (query: object, limit?:number) => Promise<ResultBlogSchema>;
}

export {
	I_BBlogModel,
	T_BlogSchema,
	ResultBlogSchema
}