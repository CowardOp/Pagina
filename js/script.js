function iniciarSesion() {
  let usuario = document.getElementById("usuario").value;
  let clave = document.getElementById("clave").value;

  if (usuario === "brayan" && clave === "123456") {
    window.location.href = "admin.html";
  } else {
    alert("Usuario o Contraseña incorrectos");
  }
}
