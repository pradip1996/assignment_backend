import { vehicleList } from "../services/vehicleService.js";

export const vehiclesController = (req, res) => {
  try {
    const vehicles = vehicleList();
    res.status(200).json(vehicles);
  } catch (error) {
    console.error("Failed to fetch vehicles:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
