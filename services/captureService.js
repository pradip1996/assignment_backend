import { vehicles } from "../data/vehicles.js";
import { cities } from "../data/cities.js";

export const captureService = (selections) => {
  if (!Array.isArray(selections) || selections.length !== 3) {
    throw new Error("Exactly 3 selections required.");
  }

  const chosenCities = selections.map((selection) => selection.city);
  if (new Set(chosenCities).size !== 3) {
    throw new Error("Each cop must choose a unique city.");
  }

  //Get random fugitive city
  const fugitiveCity = cities[Math.floor(Math.random() * cities.length)].name;


  for (const { copId, city, vehicle } of selections) {
    const vehicleInfo = vehicles?.find((vehicleData) => vehicleData?.id === vehicle);
    if (!vehicleInfo) throw new Error(`Invalid vehicle type: ${vehicleType}`);

    const cityObj = cities.find((ct) => ct.name === city);
    if (!cityObj) throw new Error(`Invalid city: ${city}`);

    const requiredRange = cityObj.distance * 2;
    if (requiredRange > vehicle.range) {
      throw new Error(
        `${vehicle.name} does not have enough range for ${city}.`
      );
    }

    // if (vehicle.count <= 0) throw new Error(`No ${vehicle.name}s available.`);
    // vehicle.count -= 1;

    if (city === fugitiveCity) {
      return { success: true, captor: copId, city: fugitiveCity };
    }
  }
  return { success: false, city: fugitiveCity };
};
