// Objetos
const producto = {   //esto es un objeto
    nombreProducto : "Monitor 20 Pulgadas", //Todo lo que esta dentro de las llaves son propiedades
    precio : 300,
    disponible : true,
}

//Forma anterior
const precioProducto = producto.precio; //Para asignar un valro a una variable usando las propiedades de los objetos
const nombreProducto = producto.nombreProducto; 
console.log(precioProducto);
console.log(nombreProducto);

//Destructuring
// const {precio} = producto; //Para crear una variable nueva sacando el nombre de las propiedades del objeto
// const {disponible} = producto;
const {disponible, precio} = producto; //Para resumir las variables de arriba.
console.log(precio);
console.log(disponible);