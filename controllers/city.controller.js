import { cityList } from "../services/citiService.js";

export const citiesController = (req, res) => {
  try {
    const cities = cityList();
    res.status(200).json(cities);
  } catch (error) {
    console.error("Failed to fetch cities:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
