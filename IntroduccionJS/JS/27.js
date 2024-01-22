//POO Programacion orientada a Objetos
/*Object literal */
const producto = {
    nombre: 'tablet',
    precion: 500
}
/*Object Constructo*/
function Producto(nombre, precio) {  //Este es una clase. Que contiene todo el objeto en el 
    this.nombre = nombre;  //Estas propiedades definen los objetos a crear
    this.precio = precio
}
const producto1 = new Producto('Monitor para PC Gamming',750);  
const producto2 = new Producto('Monitor de 42"',1020);  //Puedes crear muchos objetos y seguira usando las mismas propiedades
const producto3 = new Producto('Laptop de 14"',850);
console.log(producto1);
console.log(producto2);
console.log(producto3);