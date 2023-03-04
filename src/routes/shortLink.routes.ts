import express from "express";

import {
	getAllShortURLController,
	redirectURL,
	saveOneShortURLController
} from "../controllers/shortLink.controller";

const router = express.Router();

router.get("/shortlink", getAllShortURLController);
router.get("/redirect/:shortCode", redirectURL);
router.post("/shortlink", saveOneShortURLController);

export { router };