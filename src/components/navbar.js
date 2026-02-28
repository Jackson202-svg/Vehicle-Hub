export function loadNavbar() {
  document.getElementById("navbar").innerHTML = `
    <nav class="navbar">
      <a href="/index.html">Home</a>
      <a href="/car/carlink.html">Vehicles</a>
      <a href="/video/video.html">Videos</a>
      <a href="/link/link.html">Marketplace</a>
      <button id="darkToggle">🌙</button>
    </nav>
  `;
}
