import { Request, Response } from "express";
import {
	getAllShortURLService,
	getOneShortURLService,
	saveOneShortURLService,
} from "../services/shortLink.service";
import { client } from "../configs/redis";

export async function getAllShortURLController(req: Request, res: Response) {
	try{
		const cache = await client.get("getUrls");
		if(!cache) {
			const shortURLs = await getAllShortURLService();
			await client.set("getUrls", JSON.stringify(shortURLs));
			await client.expire("getUrls", 10);
			return res.status(200).send(shortURLs);
		}
	
		return res.status(200).send(cache);
	} catch(e) {
		console.log(e);
		res.status(500).send(e);
	}
}

export async function redirectURL(req: Request, res: Response) {
	try{
		const { shortCode } = req.params;

		const cache = await client.get(`${shortCode}`);
		if(!cache) {
			const result = await getOneShortURLService({shortCode});

			if (!result) return res.status(404).send({ message: "URL not found" });

			await client.set(`${shortCode}`, JSON.stringify(result));
			await client.expire("getUrls", 10);
	
			return res.redirect(result.originalURL);
		}

		const { originalURL } = JSON.parse(cache);

		res.redirect(originalURL);
	} catch(e) {
		console.log(e);
		res.status(500).send(e);
	}
}

export async function saveOneShortURLController(req: Request, res: Response) {
	try{
		const { 
			originalURL
		} = req.body;

		const shortURL = await saveOneShortURLService({originalURL});
		return res.status(200).send(shortURL);
	} catch(e) {
		console.log(e);
		return res.status(500).send(e);
	}
}
