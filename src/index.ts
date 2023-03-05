import express from "express";
import { connectToMongoDb } from "./configs/mongo";
import { connectToRedis } from "./configs/redis";
import { router } from "./routes/shortLink.routes";

connectToMongoDb();
connectToRedis();

const app = express();

app.use(express.json());
app.use(router);

const start = async () => {
	try {
		app.listen(process.env.PORT, () => {
			console.log(`Server is running on port ${process.env.PORT}`);
		});
	} catch (err) {
		console.log(err);
	}
};

start();
