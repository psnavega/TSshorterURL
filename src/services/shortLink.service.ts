import { IShortURL } from "../interfaces/shortURL";
import {
	getAllShortURL,
	getOneShortURL,
	saveOneShortURL,
} from "../repositories/shortLink.repository";
import { generateShortURL } from "../utils/converterURL";

export function getAllShortURLService(): Promise<IShortURL[]> {
	try{
		return getAllShortURL();
	} catch(e) {
		console.log(e);
		throw e;
	}
}

export function getOneShortURLService({shortCode}: {shortCode: string}): Promise<IShortURL | null> {
	try{
		return getOneShortURL({shortCode});
	} catch(e) {
		console.log(e);
		throw e;
	}
}

export function saveOneShortURLService({originalURL}: {originalURL: string}): Promise<IShortURL> {
	try{
		const hash = generateShortURL({originalURL});

		return saveOneShortURL({url: originalURL, hash});
	} catch(e) {
		console.log(e);
		throw e;
	}
}