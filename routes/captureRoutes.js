import express from "express";
import { captureController } from "../controllers/capture.controller.js";

const router = express.Router();

router.post("/",captureController);

export default router;
