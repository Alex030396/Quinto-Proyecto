// "use strict" //Correr JS en modo estricto
// Objetos
const producto = {   //esto es un objeto
    nombreProducto : "Monitor 20 Pulgadas", //Todo lo que esta dentro de las llaves son propiedades
    precio : 300,
    disponible : true,
}
// Object.freeze(producto); //Para congelar el objeto y no permite ser modificado, eliminado o agregar. 
Object.seal(producto); //Para congelar el objeto y no permite ser eliminar y agregar y si modificar

producto.imagen = "imagen.jpg";
producto.precio = 200;
// console.log(Object.isFrozen(producto));
// console.log(Object.isSealed(producto));
console.log(producto);
