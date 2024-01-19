// Objetos
const producto = {   //esto es un objeto
    nombreProducto : "Monitor 20 Pulgadas", //Todo lo que esta dentro de las llaves son propiedades
    precio : 300,
    disponible : true,
}
const medidas = {   
    medida : "1m", 
    peso : "1kg",
}
const nuevoProducto ={ ...producto, ...medidas}; //Asi se crea un nuevo objeto usando todas las propiedades de otros objetos. 
console.log(producto);
console.log(nuevoProducto);