const botonOrdenar = document.getElementById("botonOrdenar");
const cuerpoTabla = document.getElementById("cuerpoTabla");
let ascendente=true;
botonOrdenar.addEventListener("click", () => {
    const filas = Array.from(cuerpoTabla.getElementsByTagName("tr"));
    filas.sort((a, b) =>{
        const edadA =parseInt(a.cells[1].textContent);
        const edadB =parseInt(b.cells[1].textContent);                
        if(ascendente){
            return edadA-edadB;
        }
        else{
            return edadB-edadA;
        }
    });
    filas.forEach((fila)=>{
        cuerpoTabla.appendChild(fila);
    });
    ascendente=!ascendente;            
    if(ascendente){
        botonOrdenar.textContent = "Ordenar Ascendente";
    }
    else{
        botonOrdenar.textContent = "Ordenar Descendente";
    }
});