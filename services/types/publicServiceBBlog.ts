import { T_BlogSchema } from "../../models/types/typeModelBBlog"
import { T_Header, ServiceResponseResult } from "../../shared/types"

export interface I_BBlogService {
	createBlog: (data: T_BlogSchema) => Promise<ServiceResponseResult>;
    getBlog: (slug: string) => Promise<ServiceResponseResult>;
    getBlogList: (title: string | null, lastId: T_Header, limit: number) => Promise<ServiceResponseResult>;
}