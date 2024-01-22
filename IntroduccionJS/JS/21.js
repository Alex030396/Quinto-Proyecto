//Functions
const sumar = function(n1,n2){
    console.log(n1 + n2);
}
sumar(2,3);

//Arrow functions
const sumar2 = (n1,n2)=>console.log(n1 + n2);
sumar2(2,3);
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');



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
];
//forEach
meses.forEach(mes=>{if(mes == 'Marzo') console.log('Marzo si existe');});

// //Some ideal para arreglo de objetos
const resul = carrito.some (producto=>{return producto.nombre === 'Tablet'});
// const resul1 = carrito.some (producto => {return producto.nombre === 'Tablet'}); //Arrow Function
console.log(resul);
// console.log(resul1);

// //Reduce
Resultado = carrito.reduce((total, producto)=> total + producto.precio,0);
console.log(Resultado);

// //Filter
Resultados = carrito.filter(producto=> producto.precio < 400);
console.log(Resultados);


Resultados1 = carrito.filter(producto=> producto.nombre !== 'Laptop');
console.log(Resultados1);