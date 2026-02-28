import { loadNavbar } from "../components/navbar.js";
import { loadFooter } from "../components/footer.js";
import { loadVehicles } from "./data.js";
import { initSearch } from "./search.js";
import { initDarkMode } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  loadNavbar();
  loadFooter();
  initDarkMode();

  const vehicles = await loadVehicles();
  initSearch(vehicles);
});
