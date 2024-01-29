// Clases
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} cuesta ${this.precio}`
    }
    formatearPrecio() {
        return `cuesta ${this.precio}`
    }
}
const producto1 = new Producto('Monitor para PC Gamming',750);  
const producto2 = new Producto('Monitor de 42"',1020);

//Herencia 

class Libro extends Producto {  //Se usa para traer los valores de otra clase y poderlos usar en esta clase.
    constructor(nombre, precio, isbn){
        super(nombre, precio); //Se una para traer especificamente los this de la otra clase.
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su IBSN ${this.isbn}` //Heredas lo anterior y agregas lo nuevo.
    }
}
const libro = new Libro ('Javascript la revolucion', 120, '657198723549');
console.log(producto1.formatearProducto());
console.log(producto1.formatearPrecio());
console.log(producto2);
console.log(libro);
console.log(libro.formatearProducto() ); //Se usa este formatear porque se usa la herencia con extends y la clase.