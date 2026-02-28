// src/js/filter.js
import { getLocalVehicles } from './data.js';
import { createVehicleCard } from '../components/vehicleCard.js';

export async function renderFilteredVehicles(type, containerId) {
    const allVehicles = await getLocalVehicles();
    const container = document.getElementById(containerId);
    
    if (!container) return;

    const filtered = allVehicles.filter(v => v.type.toLowerCase() === type.toLowerCase());
    
    container.innerHTML = filtered.length > 0 
        ? filtered.map(v => createVehicleCard(v)).join('')
        : `<p class="no-results">No ${type}s found in the database.</p>`;
}
