const puntaje = 1000;
if(puntaje === 1000){  //Es una condicional si se cumple el codigo se ejecuta  //=== para comparar
    console.log('Si el puntaje es 1000');
} else {
    console.log('No es igual');
}
if(puntaje == "1000"){  //Es una condicional si se cumple el codigo se ejecuta  //== es para igual. 
    console.log('Si el puntaje es 1000');
} else {
    console.log('No es igual');
}
if(puntaje === "1000"){  //=== compara pero no hay comparacion y ejecuta el else
    console.log('Si el puntaje es 1000');
} else {
    console.log('No es igual');
}
if(puntaje !== 100){  //!== es para ver si son diferentes
    console.log('Es diferente a 1000');
} else {
    console.log('es igual a 100');
}

const efectivo = 1000;
const carrito = 800;
if (efectivo < carrito){
    console.log('Si hay compra');
} else{
    console.log('Saldo insuficiente');
}


const rol = 'administrador';
if (rol === 'administrador') {
    console.log('Accesos a todo el sistema'); 
} else {
    console.log('NO tienes acceso');
}
    
const rols = 'editor';
if(rols === 'administrador'){
    console.log('Accesos a todo el sistema');
} else if (rols === 'editor'){
    console.log('Acceso para editar');
}else {
    console.log('NO tienes acceso');
}