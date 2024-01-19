// Arreglos o Arrays
const numeros = [10,20,30,40,50,60];   //Los arreglos se ponen en corchetes "[]"
console.log(numeros);
console.table(numeros);  //Te va agregar una tabla en la consola.

const meses = new Array('Enero', 'Febrero','Marzo','Abril','Mayo','Junio'); //Para crear arreglos tambien
console.log(meses);
console.table(meses);

//Puedes agregar cual quier tipo de propiedad, valor, objeto o hasta otro arreglo
const arreglo = ["hola", 10 , true, "si", null, {alex: "alex", Jose: "jose"}, [1,2,3]];
console.log(arreglo);

// Acceder a los valores de un arreglo
console.log(numeros[4]);

//Conocer la extencion de un arreglo
console.log(meses.length);

meses.forEach( function(mes) {  //Se usa para interar y traer todos los valores de un arreglo
    console.log(mes);
}); 