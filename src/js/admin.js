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

// controlla tama oscuro o claro

const themeController = document.getElementById("themeController");
const body = document.body;

themeController.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});

// controla la seccion que se muestra

const buttons = document.querySelectorAll(".contenido_button button");
let activeSection = null;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Oculta la sección activa
    if (activeSection) {
      activeSection.classList.remove("mostrar");
      activeSection.classList.add("ocultar");
    }

    // Muestra la nueva sección
    const sectionId = button.getAttribute("data-section");
    const newSection = document.getElementById(sectionId);
    newSection.classList.remove("ocultar");
    newSection.classList.add("mostrar");

    // Actualiza la sección activa
    activeSection = newSection;
  });
});
