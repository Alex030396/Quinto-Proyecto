// Array Methods
const meses = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio']; 
const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgdas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
] ;
//forEach
meses.forEach(function(mes){  //Para mostrar todos los meses separados del arreglo
    console.log(mes);
});
meses.forEach(function(mes){  //Para saber si esta registrado la informacion en el arreglo
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});
//Includes
const resultados = meses.includes('Marzo');  //Para mostrar si existe en boolaneo false o true
const resultados2 = carrito.includes('Lapto');  //No funciona para los arreglos con Objetos
console.log(resultados);
console.log(resultados2);

//Some ideal para arreglo de objetos
const resul = carrito.some (function(producto){ // Con esta funcion si te muestra si es True o False en la consola
    return producto.nombre === 'Tablet'
});
const resul1 = carrito.some (producto => {return producto.nombre === 'Tablet'}); //Arrow Function
console.log(resul);
console.log(resul1);

//Reduce
Resultado = carrito.reduce(function(total, producto){  //Es para traer la suma de todos los valores.
    return total + producto.precio
},0);
console.log(Resultado);

//Filter
Resultados = carrito.filter(function(producto) {  //Es para filtrar los tados mayor, menor o igual que el retorno.
    return producto.precio < 400
});
Resultados1 = carrito.filter(function(producto) {  //Es para filtrar los tados mayor, menor o igual que el retorno.
    return producto.nombre !== 'Laptop' //Para diferente !== y para iguales ===
});
console.log(Resultados);
console.log(Resultados1);