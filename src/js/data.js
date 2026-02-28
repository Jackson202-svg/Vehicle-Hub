export async function loadVehicles() {
  const response = await fetch("/data/vehicles.json");
  return await response.json();
}
