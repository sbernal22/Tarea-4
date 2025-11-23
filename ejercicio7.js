const listaUsuarios = document.getElementById("listaUsuarios");
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        return response.json();
    })
    .then((usuarios)=>{
        usuarios.forEach((usuario)=>{
            const li=document.createElement("li");
            li.textContent="Usuario: "+usuario.name+", Correo: "+usuario.email;
            listaUsuarios.appendChild(li);
        });
    })
    .catch((error)=>{
        console.log("Error:", error);
    });