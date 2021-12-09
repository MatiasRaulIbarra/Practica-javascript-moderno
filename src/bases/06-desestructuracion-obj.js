// eslint-disable-next-line no-unused-vars
const persona = {
    nombre:"Tony",
    edad:45,
    clave:"Ironman"
}

//const {edad,clave,nombre}=persona;


// eslint-disable-next-line no-unused-vars
const useContext = ({clave,nombre,edad,range="capitan"})=>{

   // console.log(nombre,edad)
    return {
        nombreClave:clave,
        anios:edad
    }
   
}


 const {nombreClave,anios} = useContext(persona);

console.log(nombreClave,anios)