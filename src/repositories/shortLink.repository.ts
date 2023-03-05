import { ShortURL } from "../models/shortLink";
import { IShortURL } from "../interfaces/shortURL";

export function getAllShortURL(): Promise<IShortURL[]>{
	console.log("3");
	return ShortURL.find().exec();
}

export function getOneShortURL({shortCode}:{shortCode: string}): Promise<IShortURL | null>{
	return ShortURL.findOne({shortCode}).exec();
}

export function saveOneShortURL({url, hash}: {url: string, hash: string}): Promise<IShortURL>{
	return ShortURL.create({
		originalURL: url,
		shortCode: hash
	});
}