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

numeros[6] = 70; //Es para agregar o modificar el arreglo dependiendo del index que coloques.
numeros.push(80); //Para agregar mas datos al arreglo al final del index.
numeros.unshift(-10,-20,-30); // Para poder agregar al principio del arreglo moviendo en index.
console.table(numeros);

// meses.pop();  //Es para eliminar el ultimo index del arreglo
// meses.shift();  //Es para eliminar el primerer index del arreglo
// meses.splice(3,1); //Para eliminar un numero especifico del arreglo. El 1er nuemro en la posicion del index y el 2do para la cantidad de eliminar.
console.table(meses);

//Rest Operator o Spread  Operator
const newArreglo = [...meses, 'Julio','agosto']; //Los ... es para copiar el arreglo. Y agregar nuevos datos a este arrglo
console.log(newArreglo);