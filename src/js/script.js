let cambioTema = document.getElementById("cambioTema");
let usuario = document.getElementById("usuario");

cambioTema.addEventListener("change", () => {
  if (cambioTema.checked) {
    usuario.classList.remove("light-theme");
    usuario.classList.add("dark-theme");
  } else {
    usuario.classList.remove("dark-theme");
    usuario.classList.add("light-theme");
  }
});
