export function initDarkMode() {
  const toggle = document.getElementById("darkToggle");

  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  toggle?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}
