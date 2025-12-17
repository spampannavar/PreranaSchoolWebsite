// Mobile menu toggle + small UX helpers
(function () {
  const btn = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (btn && links) {
    btn.addEventListener("click", () => links.classList.toggle("open"));
  }

  // Put current year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
