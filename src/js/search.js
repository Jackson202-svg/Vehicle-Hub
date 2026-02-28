export function initSearch(vehicles) {
  const input = document.getElementById("searchInput");
  const list = document.getElementById("vehicleList");

  function render(results) {
    list.innerHTML = "";
    results.forEach(vehicle => {
      const div = document.createElement("div");
      div.className = "vehicle-card";
      div.innerHTML = `
        <h3>${vehicle.brand} ${vehicle.model}</h3>
        <p>Type: ${vehicle.type}</p>
        <p>Price: $${vehicle.price.toLocaleString()}</p>
      `;
      list.appendChild(div);
    });
  }

  render(vehicles);

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    const filtered = vehicles.filter(v =>
      `${v.brand} ${v.model}`.toLowerCase().includes(value)
    );
    render(filtered);
  });
}
