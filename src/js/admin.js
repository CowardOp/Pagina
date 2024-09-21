const getElement = (idElement) => {
  return document.getElementById(idElement);
};

const buttonBarra = getElement("buttonBarra");
const barraLateral = getElement("barraLateral");

buttonBarra.addEventListener("click", () => {
  barraLateral.classList.toggle("show");
  buttonBarra.classList.toggle("show");
});

const bloque = document.querySelectorAll(".bloque");
const titulo = document.querySelectorAll(".titulo");

/*
Cuando haga click en titulo
      Quitar clase a tosdos los bloques
      Y añadir clase al bloque activo
*/

titulo.forEach((cadaTitulo, i) => {
  titulo[i].addEventListener("click", () => {
    bloque.forEach((cadaBloque, j) => {
      if (i !== j) {
        bloque[j].classList.remove("activo");
      }
    });

    bloque[i].classList.toggle("activo");
  });
});

const themeToggle = document.querySelector(".theme-controller");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Función para aplicar el tema según la preferencia del sistema
function applySystemTheme(e) {
  if (e.matches) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.checked = true;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.checked = false;
  }
}

// Llama a la función al cargar la página
applySystemTheme(mediaQuery);

// Escucha cambios en el sistema
mediaQuery.addEventListener("change", applySystemTheme);

// Escucha cambios manuales con el checkbox
themeToggle.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});
