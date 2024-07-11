let elemento = document.getElementById("imagen");
function cambio() {
  if (elemento.classList.contains("cambio")) {
    elemento.classList.remove("cambio");
  } else {
    elemento.classList.add("cambio");
  }
}
