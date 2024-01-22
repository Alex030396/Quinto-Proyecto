function sumar(numero1, numero2) {  //Numero1, 2 son parametros
    console.log(numero1 + numero2);
}
sumar(10,10); //Argumentos o los valores reales
sumar(1);  //No ejecuta porque falta un valor y los parametros no aplican

function sumara(numero = 0, numeros = 0) {  //Le pones a los parametros un valor de 0 para poder ejecutar si falta uno y no salga NAH
    console.log(numero + numeros);
}
sumara(1);

const sumar2 = function(n1,n2){
    console.log(n1 + n2);
}
sumar2(3,4);