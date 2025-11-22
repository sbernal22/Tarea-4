const boton= document.getElementById("boton");
const colores=["red", "blue", "yellow", "black"];
const generarAleatorio=()=>{
    return parseInt(Math.random()*5);
}
boton.addEventListener("click", ()=>{
    document.querySelector("body").style.backgroundColor= colores[generarAleatorio()];
});