import express from "express";
import cors from "cors";
import { port } from "./config/index.js";
import vehicleRoutes from "./routes/vehiclesRoutes.js";
import cityRoutes from "./routes/citiRoutes.js";
import captureRoutes from "./routes/captureRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// API Routes
app.use("/api/cities", cityRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/capture", captureRoutes);

// Start server
const PORT = port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
