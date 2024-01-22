// For loop
for (let i = 0; i < 10; i++ ){  //Se usa para mostrar la secuencia de numeros de 0 hasta 9 que son 10 digitos
    console.log(i);
}
for (let i = 1; i < 10; i++ ){ //Para mostrar los impares y los pares de 10 numeros.
    if( i % 2 === 0){
        console.log(`El numero ${i} es par`);
    } else{
        console.log(`El numero ${i} es impar`);
    }
}
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
for(let i = 0; i < carrito.length; i++)  { //Para mostrar todos los nombres y precio del arreglo
    console.log(carrito[i]);
}


// White loop

// let i = 0; //indice 
// while(i < 10){ //Condicion
//     console.log(i);
//     i++; //Incremento
// }

// let i = 0; //indice 
// while(i <= 100){ //Condicion
//     if (i % 2 === 0){
//         console.log(`El numero ${i} es par`);
//     } else{
//         console.log(`El numero ${i} es impar`);
//     }
//     i++; //Incremento
// }
// let i = 0; //indice 
// while(i < carrito.length){ //Condicion
//     console.log(carrito[i].nombre);
//     i++; //Incremento
// }
// let i = 20; //indice   //NO aparece nada.
// while(i < 10){ //Condicion
//     console.log(i);
//     i++; //Incremento
// }

// Do White loop

let i = 0;   //El se ejecuta almenos una vez y despues evalua. En el while primero evalua y despues ejecuta
do { 
    console.log(i);
    i++;
}while( i < 10);