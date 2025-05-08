import express from "express";
import { citiesController} from "../controllers/city.controller.js";
const router = express.Router();
router.get("/",citiesController);

export default router;
