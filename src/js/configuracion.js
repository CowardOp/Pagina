const botonMenu = document.getElementById("botonMenu");
const menuOpciones = document.getElementById("menuOpciones");

botonMenu.addEventListener("click", () => {
  if (menuOpciones.classList.contains("ocultar")) {
    menuOpciones.classList.remove("ocultar");
  } else {
    menuOpciones.classList.add("ocultar");
  }

  botonMenu.classList.toggle("ocultar");
});
