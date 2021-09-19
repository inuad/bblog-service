type T_BlogSchema = {
	title: string,
    detail: string,
    image: string,
	created_at?: Date
    created_by?: string,
}

interface I_BBlog {
	createBlog(data: T_BlogSchema): void;
    getBlog() : void;
    getBlogList() : void;
    searchBlog?() : void;
}

export {
	I_BBlog,
	T_BlogSchema
}