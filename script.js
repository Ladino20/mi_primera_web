//alert("Hola este es mi Javascript");

// let nombre = "Katherin Ladino"

// console.log(nombre);
// let titulo = "Acerca de mi";
// let valor = document.querySelectorAll("parrafo1");
// console.log(valor);
// titulo.innerHTML = cambio;

// let menu_responsive = document.querySelector(".checkbtn");

// menu_responsive.onclick = function () {
//     web = document.querySelector(".web");
//     web.classList.toggle("active");
// };

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}
form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});