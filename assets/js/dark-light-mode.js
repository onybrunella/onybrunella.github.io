const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

const currentMode = localStorage.getItem("mode");

function updateIcon() {
  const sunIcon = document.querySelector("#mode-toggle img.fa-sun");
  const moonIcon = document.querySelector("#mode-toggle img.fa-moon");
  const isDark = body.classList.contains("dark-mode");

  if (sunIcon && moonIcon) {
    if (isDark) {
      sunIcon.style.display = "inline-block";
      moonIcon.style.display = "none";
    } else {
      sunIcon.style.display = "none";
      moonIcon.style.display = "inline-block";
    }
  }

  if (toggleButton) {
    toggleButton.setAttribute("aria-pressed", isDark ? "true" : "false");
    toggleButton.setAttribute(
      "aria-label",
      isDark
        ? "Activer le mode lumineux"
        : "Activer le mode sombre"
    );
  }
}

if (currentMode === "dark") {
  body.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode");
}

updateIcon();

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const newMode = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("mode", newMode);

    updateIcon();
  });
}
