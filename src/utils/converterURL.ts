import { createHash } from "crypto";

export function generateShortURL({originalURL}: {originalURL: string}): string {
	console.log(originalURL);
	const hashCode = createHash("sha256")
		.update(originalURL)
		.digest("base64")
		.substr(0, 8);

	return hashCode;
}
