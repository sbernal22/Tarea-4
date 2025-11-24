import { usuarios } from "./datos.js";
import { filtrarMayores } from "./filtros.js";
const mayoresDeEdad=filtrarMayores(usuarios);
console.log("Usuarios mayores de 18 años:");
console.log(mayoresDeEdad);