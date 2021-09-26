import { T_Header } from "../types/shareType"

export interface I_BBlogService {
	// createBlog: (data: T_BlogSchema) => void;
    getBlog: (slug: string) => Promise<any>; // TODO Change to proper type later proper type later
    getBlogList: (lastId: T_Header, title: string | null) => Promise<any>; // TODO Change to proper type later proper type later
}