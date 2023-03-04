import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI;
const mongoTestURI = process.env.MONGO_TEST_URI;

export async function connectToMongoDb(): Promise<void> {
	try {
		const uri = process.env.NODE_ENV === "production" ? mongoURI : mongoTestURI;

		await mongoose.connect(`${uri}`);

		console.log("Mongo - Connected successfully");
	} catch (e: unknown) {
		console.log("Mongo - No connected");
		throw e;
	}
}
