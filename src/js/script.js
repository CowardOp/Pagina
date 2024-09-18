let elemento = document.getElementById("imagen");
function cambio() {
  elemento.classList.toggle("cambio");
}

function cambioClave() {
  var claveInput = document.getElementById("clave");
  var toggleIcon = document.getElementById("cambioClave");

  if (claveInput.type === "password") {
    claveInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    claveInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}
