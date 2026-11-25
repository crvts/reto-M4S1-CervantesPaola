
const formulario = document.getElementById("formularioActividad");
const lista = document.getElementById("listaActividades");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("actividad").value.trim();
    const fecha = document.getElementById("fecha").value;

    if (nombre === "" || fecha === "") {
        alert("Completa todos los campos.");
        return;
    }

    const mensajeVacio = lista.querySelector(".vacio");

    if (mensajeVacio) {
        mensajeVacio.remove();
    }

    const nuevaActividad = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = nombre + " - Fecha límite: " + fecha;

    nuevaActividad.appendChild(texto);
    lista.appendChild(nuevaActividad);

    formulario.reset();
});
