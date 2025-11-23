const botonAgregar = document.getElementById("boton");
const campoTexto = document.getElementById("texto");
const lista = document.getElementById("lista");

lista.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
});
botonAgregar.addEventListener("click", () => {
    const texto = campoTexto.value;
    const li = document.createElement("li");
    li.textContent = texto;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    li.appendChild(btnEliminar);
    lista.appendChild(li);
});