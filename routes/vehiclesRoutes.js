import express from "express";
import { vehiclesController } from "../controllers/vehicle.controller.js";
const router = express.Router();
router.get("/", vehiclesController);

export default router;
