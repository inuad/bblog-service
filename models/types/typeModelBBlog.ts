type T_BlogSchema = {
	slug: string,
	title: string,
    detail: string,
    image: string,
	created_at?: Date
    created_by?: string,
}

interface I_BBlogModel {
	createBlog: (data: T_BlogSchema) => void;
    getBlog: (query: object) => Promise<any>; // TODO Change to proper type later proper type later
    getBlogList: (query: object, limit?:number) => Promise<any>; // TODO Change to proper type later proper type later
}

export {
	I_BBlogModel,
	T_BlogSchema
}