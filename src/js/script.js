let cambioTema = document.getElementById("cambioTema");

cambioTema.addEventListener("change", () => {
  if (cambioTema.checked) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
});
