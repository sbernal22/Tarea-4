const obtenerDatos=async ()=>{
    try{
        const response = await fetch("https://gitadd.gitcommit-m");                
        if (!response.ok){
            throw new Error("Error en la respuesta: " + response.status);
        }
        const datos=await response.json();
        console.log("Datos obtenidos correctamente:");
        console.log(datos);
    }
    catch(error){
        console.log("Error capturado:");
        console.log(error);
    }
};
obtenerDatos();