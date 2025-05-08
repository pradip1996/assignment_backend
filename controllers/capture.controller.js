import { captureService } from "../services/captureService.js";

export const captureController = (req, res) => {
  try {
    console.log("req.body",req.body)
    const result = captureService(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
