const listaUsuarios = document.getElementById("listaUsuarios");
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((usuarios)=>{
        console.log("Usuarios obtenidos:");                
        usuarios.forEach((usuario)=>{
            console.log(usuario.name);
            const li=document.createElement("li");
            li.textContent=usuario.name;
            listaUsuarios.appendChild(li);
        });
    })
    .catch((error)=>{
        console.log("Error:", error);
    });