// src/components/vehicleCard.js
export function createVehicleCard(vehicle) {
    return `
        <div class="vehicle-card" data-id="${vehicle.id}">
            <div class="vehicle-badge">${vehicle.type}</div>
            <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model}" class="v-img">
            <div class="v-info">
                <h3>${vehicle.brand} ${vehicle.model}</h3>
                <p>Year: ${vehicle.year || '2026'}</p>
                <a href="${vehicle.link}" class="v-btn">View Specs</a>
            </div>
        </div>
    `;
}
