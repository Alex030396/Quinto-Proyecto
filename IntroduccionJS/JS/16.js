// Declaracion de Funcion
function sumar() {   //Creas la funcion y despues la llamas
    console.log(10 + 10);
}
sumar(); // Esta linea es para llamar la fucion e imprima en la consola.

//Exprecion de la Funcion
const sumar2 = function(){
    console.log(3 +3);
}
sumar2();

// IIFE
(function() {  //Son usadas para que no lea otras variables de otros archivos
    console.log('Esta es una funcion');
})();  //Los parentises en la ultima es para llamar el resultado automaticamente.
