const cajas = document.getElementsByClassName("caja");
for (let i=0; i<cajas.length; i++) {
    cajas[i].addEventListener("click", ()=>{            
        for(let j=0; j<cajas.length; j++){
            cajas[j].classList.remove("activa");
        }
        cajas[i].classList.add("activa");
    });
}