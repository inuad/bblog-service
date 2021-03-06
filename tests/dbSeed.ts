import dotenv from "dotenv"
import { lorem, image, commerce } from "faker"
import MongoInstance from "../modules/mongooseInstance"
import { model, Schema } from "mongoose";
import slugify from "slugify";
import { customAlphabet } from 'nanoid'

dotenv.config({path: `./.env`});
(async() => {
	try{
		let seedCount = parseInt(process.argv[2]);
		let url:string = `${process.env.MONGO_URL}/${process.env.MONGO_DB_NAME}`;
		let instance = new MongoInstance();
		await instance.connectMongo(url);

		const blogSchema = new Schema({
			slug: { type: String, required: true },
			title: { type: String, required: true },
            detail: { type: String, required: true },
            image: { type: String, required: false },
			created_at: { type: Date, required: true, default: new Date() },
			created_by: { type: String, required: false, default: "iNuad"},
		}, {
			versionKey: false
		})
		let bblogModel = model('Blog', blogSchema);

		let count = seedCount;
		while(count > 0){
			await seedData(bblogModel);
			console.log(`Seed data : ${(seedCount-count)+1}`)
			count--;
		}

		console.log("Seed Success")
	}catch(err) {
		console.log(err)
	}

	async function seedData(model){
		const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 4)

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let title = commerce.productDescription();
				let slug = nanoid().toString();
				if(slugify(title) !== ""){
					slug = `${slugify(title, {lower: true})}-${nanoid()}`;
				}
				new model({
					slug: slug,
					title: title,
					detail: lorem.paragraphs(),
					image: image.image(),
					created_at: new Date()
				}).save();

				return resolve(true);
			}, 500)
		})
	}
})()


