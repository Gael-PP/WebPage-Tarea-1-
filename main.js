// Selecciona todos los elementos que tienen el atributo data-toggle
const toggleSections = document.querySelectorAll("[data-toggle]");

toggleSections.forEach((section) => {
    section.addEventListener("click", () => {
        const contentId = section.getAttribute("data-toggle");
        const content = document.getElementById(contentId);

        // Alterna las clases para mostrar/ocultar con animación
        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
            content.classList.add("visible");
        } else {
            content.classList.remove("visible");
            content.classList.add("hidden");
        }
    });
});