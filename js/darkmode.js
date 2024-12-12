document.getElementById("mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const toggleButton = document.getElementById("mode-toggle");
    toggleButton.textContent = 
      document.body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";
  });
  