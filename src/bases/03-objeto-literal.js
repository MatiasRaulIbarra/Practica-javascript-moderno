const persona ={
    nombre:"Tony",
    apellido:"Starck",
    edad:45,
    direccion:{
               ciudad:"New York",
               zip:535353535,
               lat:242.22424,
               lang:242424.24
 
    }
 }
 //console.tablet (persona);
 const persona2 = {... persona}
 persona2.nombre = "peter"
 
 console.log(persona);
 console.log(persona2)