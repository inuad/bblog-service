import { connect, connection} from 'mongoose';

class MongoInstance {
	public options = {
		useUnifiedTopology: true,
	}

	public connectMongo(mongoUrl:string, options:object = this.options) :Promise<boolean> {
		return new Promise(async (resolve, reject) => {
			connect(mongoUrl, options)
			.then(() => {
				console.log("Mongo connected");
				return resolve(true);
			})
			.catch((err) => {
				console.log(err)
				return reject(false);
			})
		});
	}

	public async disconnectMongo() {
		await connection.close();
		console.log("Mongo disconnected");
	}
}

export default MongoInstance;