type T_BlogSchema = {
	title: string,
	created_at: Date
}

interface I_BBlog {
	createBlog: () => void;
}

export {
	I_BBlog,
	T_BlogSchema
}