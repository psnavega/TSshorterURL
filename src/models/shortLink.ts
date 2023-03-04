import mongoose from "mongoose";

const shortURLSchema = new mongoose.Schema({
	originalURL: {
		type: String,
		required: true
	},
	shortCode: {
		type: String,
		required: true,
		unique: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
});

const ShortURL = mongoose.model("ShortURL", shortURLSchema);

export { ShortURL };