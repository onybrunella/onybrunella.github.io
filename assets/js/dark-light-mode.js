const root = document.documentElement;
const toggleButton = document.getElementById("mode-toggle");
const STORAGE_KEY = "mode";

function prefersDark() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

function isDarkMode() {
  return root.classList.contains("dark-mode");
}

function applyMode(mode) {
  const dark = mode === "dark";
  root.classList.toggle("dark-mode", dark);
  document.body.classList.toggle("dark-mode", dark);
  updateIcon();
}

function getInitialMode() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch (e) {
    /* ignore */
  }
  return prefersDark() ? "dark" : "light";
}

function updateIcon() {
  const sunIcon = document.querySelector("#mode-toggle img.fa-sun");
  const moonIcon = document.querySelector("#mode-toggle img.fa-moon");
  const dark = isDarkMode();

  if (sunIcon && moonIcon) {
    sunIcon.style.display = dark ? "inline-block" : "none";
    moonIcon.style.display = dark ? "none" : "inline-block";
  }

  if (toggleButton) {
    toggleButton.setAttribute("aria-pressed", dark ? "true" : "false");
    toggleButton.setAttribute(
      "aria-label",
      dark ? "Activer le mode lumineux" : "Activer le mode sombre"
    );
  }
}

applyMode(getInitialMode());

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const next = isDarkMode() ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      /* ignore */
    }
    applyMode(next);
  });
}

if (window.matchMedia) {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch (e) {
        return;
      }
      applyMode(event.matches ? "dark" : "light");
    });
}
