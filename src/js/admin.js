const getElement = (idElement) => {
  return document.getElementById(idElement);
};

const buttonBarra = getElement("buttonBarra");
const barraLateral = getElement("barraLateral");

buttonBarra.addEventListener("click", () => {
  barraLateral.classList.toggle("show");
  buttonBarra.classList.toggle("show");
});
