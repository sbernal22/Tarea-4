const botonAgregar= document.getElementById("boton");
const campoTexto=document.getElementById("texto");
const lista=document.getElementById("lista");
botonAgregar.addEventListener("click", ()=>{
    const texto=campoTexto.value;
    const li = document.createElement("li");
    li.textContent = texto;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", ()=>{
        li.remove();
    })
    li.appendChild(btnEliminar);
    lista.appendChild(li);
})