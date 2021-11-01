import MongoInstance from "../modules/mongooseInstance"
import BBlogService from "../services/serviceBBlog";
import modelBBlog from "../models/modelBBlog";
import dotenv from "dotenv"

dotenv.config();
let instance:MongoInstance;
let service:BBlogService;
beforeAll(async () => {
	let url:string = `${process.env.MONGO_URL}/${process.env.MONGO_DB_NAME}`;
	instance = new MongoInstance();
	await instance.connectMongo(url);

	service = new BBlogService(modelBBlog);
})

afterAll(async () => {
	await instance.disconnectMongo()
})

test("Call service: getBlogList : error", async () => {
	let [_, error] = await service.getBlogList("Test");
	expect(typeof error).toBe("object");
})

test("Call service: getBlogList : pass", async () => {
	let [result, _] = await service.getBlogList(null);
	expect(result).not.toBeNull()
})