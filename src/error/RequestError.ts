class RequestError extends Error {
	constructor(message: string, public statusCode: number) {
		super(message);
		this.statusCode = statusCode;
		this.name = "RequestError";
	}
}

export { RequestError };