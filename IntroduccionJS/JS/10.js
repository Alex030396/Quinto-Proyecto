// Objetos
const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;
// Las tres variables de arriba son iguales a las de abajo. Es mejor usar los objetos porque te ahorras mas codigo.

const producto = {   //esto es un objeto
    nombreProducto : "Monitor 20 Pulgadas", //Todo lo que esta dentro de las llaves son propiedades
    precio : 300,
    disponible : true,
}
//Agregar nuevas propiedades
producto.imagen = 'imagenes.jpg'

//Eliminar propiedades
delete producto.disponible;

console.log(producto);
console.log(producto.precio); //Para que solo muestre el valor de la variable precio. 
console.log(producto.nombreProducto); //Para que solo muestre el valor de la variable nombreProducto. 
console.log(producto.disponible); //Para que solo muestre el valor de la variable disponible. 
console.log(producto["precio"]);// Es un manera de solo mostrar la propiedad que esta en corchetes.
