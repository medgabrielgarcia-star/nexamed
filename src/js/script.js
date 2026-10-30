const menuToggle = document.querySelector(".menu__toggle");
const menuPrincipal = document.querySelector("#menu__principal");
const enlacesMenu = menuPrincipal.querySelectorAll(".navegacion__enlace");

menuToggle.addEventListener("click", () => {
  const menuAbierto = menuPrincipal.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", menuAbierto);
  menuToggle.setAttribute(
    "aria-label",
    menuAbierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"
  );
});

enlacesMenu.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menuPrincipal.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
  });
});

document.addEventListener("click", (evento) => {
  const clicFueraMenu =
    !menuPrincipal.contains(evento.target) &&
    !menuToggle.contains(evento.target);

  if (clicFueraMenu && menuPrincipal.classList.contains("active")) {
    menuPrincipal.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
  }
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && menuPrincipal.classList.contains("active")) {
    menuPrincipal.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú de navegación");

    menuToggle.focus();
  }
});