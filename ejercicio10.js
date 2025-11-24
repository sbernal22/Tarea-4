const formulario = document.getElementById("formulario");
const botonEnviar=document.getElementById("boton");
const mensaje = document.getElementById("mensaje");
boton.addEventListener("click", async ()=>{
    const nombre=document.getElementById("nombre").value;
    const email=document.getElementById("email").value;
    const datos={
        title: nombre,
        body: email,
        userId: 1
    };
    mensaje.textContent = "Enviando...";
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });
        if (!response.ok) {
            throw new Error("Error al enviar los datos");
        }
        const respuesta = await response.json();
        mensaje.textContent = "Datos enviados correctamente. ID: " + respuesta.id;
        console.log("Respuesta del servidor:", respuesta);
        formulario.reset();
    }
    catch (error){
        mensaje.textContent = "Error: " + error.message;
        console.log("Error:", error);
    }
});