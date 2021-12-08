//funciones en JS

const saludar2 = (nombre)=>{
    return `Hola,${nombre}`
}

const saludar3 = (nombre) =>`Hola,${nombre}`;
const saludar4 = () =>`Hola mundo`;

//console.log(saludar ("goku"))

console.log(saludar2("vegeta"))
console.log(saludar3("Goku"))
console.log(saludar4())

const getUser =()=>({
    uid:"ABC123",
    username:"el_papito1502"
})
const user = getUser();
console.log(user)


//tarea
const  getUsuarioActivo=(nombre)=>({
    
        uid:"ACVD3433",
        username:nombre
})
const usuarioActivo = getUsuarioActivo("Matias");
console.log(usuarioActivo)