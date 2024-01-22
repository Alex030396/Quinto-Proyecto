//POO Programacion orientada a Objetos
/*Object literal */
const producto = {
    nombre: 'tablet',
    precion: 500
}
/*Object Constructo*/
function Cliente(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido}`;
}


function Producto(nombre, precio) {  //Este es una clase. Que contiene todo el objeto en el 
    this.nombre = nombre;  //Estas propiedades definen los objetos a crear
    this.precio = precio;
}
// Crear funciones que solo  se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} su precio ${this.precio}$`;
}


const producto1 = new Producto('Monitor para PC Gamming',750);  
const producto2 = new Producto('Monitor de 42"',1020);  //Puedes crear muchos objetos y seguira usando las mismas propiedades
const cliente = new Cliente('Alex','Briceño');
// function formatearProducto(producto) {
//     return `El producto ${producto2.nombre} su precio ${producto2.precio}$`;
// }
console.log(producto1);
console.log(producto1.formatearProducto());
console.log(producto2);
console.log(producto2.formatearProducto());

// console.log(formatearProducto(producto2));
console.log(cliente);
console.log(cliente.formatearCliente());