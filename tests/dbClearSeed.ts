import dotenv from "dotenv"
import MongoInstance from "../modules/mongooseInstance"
import { model, Schema } from "mongoose";

dotenv.config({path: `./.env`});
(async() => {
	try{
		let url:string = `${process.env.MONGO_URL}/${process.env.MONGO_DB_NAME}`;
		let instance = new MongoInstance();
		await instance.connectMongo(url);

		const blogSchema = new Schema({
			title: { type: String, required: true },
            detail: { type: String, required: true },
            image: { type: String, required: false },
			created_at: { type: Date, required: true, default: new Date() },
			created_by: { type: String, required: false, default: "iNuad"},
		}, {
			versionKey: false
		})
		let bblogModel = model('Blogs', blogSchema);
		await bblogModel.deleteMany()

		console.log("Clear Seed Success")
	}catch(err) {
		console.log(err)
	}
})()


