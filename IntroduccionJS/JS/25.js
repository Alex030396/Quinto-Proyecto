const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgdas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];
//ForEach    Solo se puede usar en arreglos
carrito.forEach(function(){  //Va a mostrar la catindad de propiedades que tiene el arreglo mas el string
    console.log('Una vez por cada elemento');
});
carrito.forEach(() => console.log('Una vez por cada elemento'));


carrito.forEach(function(producto){  //Para mostrar todas las propidades del arreglo una por una
    console.log(producto);
});
carrito.forEach((producto)=>{console.log(producto);});


carrito.forEach(function(producto){   //Para mostrar todos los precios
    console.log(producto.precio);
});
carrito.forEach(producto=>console.log(producto.precio));


//Map  Para crear un nuevo arreglo, el cual puedes crear con una variable
carrito.map(producto=>console.log(producto.precio));

const arreglo = carrito.map(producto=>producto.nombre);
console.log(arreglo);
const arreglo1 = carrito.map(producto=>`${producto.nombre} - ${producto.precio}`);
console.log(arreglo1);