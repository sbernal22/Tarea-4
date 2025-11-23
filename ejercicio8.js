const nuevoPost={
    tittle: "Post posteador",
    body: "Body de mi post posteador",
    userId: "11"
}
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevoPost)
})
    .then(response=>response.json())
    .then((respuesta)=>{
        console.log("Respuesta del servidor:");
        console.log(respuesta);
    })
    .catch(error=>console.error("Error al enviar", error));