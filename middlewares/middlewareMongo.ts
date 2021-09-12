import express, { Request, Response, NextFunction, Router } from "express"
import MongoInstance from "../modules/mongooseInstance";

const route:Router = express.Router();
let connect:boolean = false;
let url:string = `${process.env.MONGO_URL}/${process.env.MONGO_DB_NAME}`;

route.use(async (req:Request, res:Response, next:NextFunction) => {
	if(connect === false){
		let instance = new MongoInstance();
		connect = await instance.connectMongo(url);
	}

	return next();
})

export default route