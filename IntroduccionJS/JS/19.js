function sumar(n1,n2){
    return n1 + n2;
}
const resultado = sumar(2,3); 
console.log(resultado);

let total = 0;
function agregarCarrito(precio){  //Para ir sumando todos los valores que vamos agregando.
    return total += precio;
}
function calcularImpuesto(total) {  //Para cacular el impuesto usando la variable total.
    return 1.15 * total;
}
total = agregarCarrito(200);
total = agregarCarrito(400); 
total = agregarCarrito(600);
console.log(total);
const totalApagar = calcularImpuesto(total); //Para realizar el calculo de todo el total multiplicandolo por 1.15
console.log(totalApagar);
console.log(`El total a apagar con impuestos es de: ${totalApagar}`); //Coma invertido