import { T_Header, ServiceResponseResult } from "../shared/types"

export interface I_BBlogService {
	// createBlog: (data: T_BlogSchema) => void;
    getBlog: (slug: string) => Promise<ServiceResponseResult>;
    getBlogList: (lastId: T_Header, title: string | null) => Promise<ServiceResponseResult>;
}