export const filtrarMayores = (usuarios)=>{
    const mayores = [];
    for(let i = 0; i<usuarios.length; i++){
        if (usuarios[i].edad >= 18) {
            mayores.push(usuarios[i]);
        }
    }
    return mayores;
};