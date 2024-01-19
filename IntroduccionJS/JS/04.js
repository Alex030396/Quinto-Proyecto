//String o cadenas de texto
const producto = "Monitor de 20 pulgadas";
const Producto = "Monitor de 20\"";  //Se pone un eslach \ para poder agregar las comillas " 
const Producto1 = 'Monitor de 20"';  //Se puedo usar comillas sencillas para las comillas " 
const producto1 = String('Monitor de 30 pulgadas');
const producto2 = new String('Monitor de 30 pulgadas');  
console.log(producto);
console.log(Producto);
console.log(Producto1);
console.log(typeof producto);  //Para saber el tipo de dato que tiene una variable  es un string
console.log(producto1);
console.log(producto2);
console.log(typeof producto2); //Para saber su tipo que es un objeto

//lenght es Extension
const cada = "Aprendiendo javascript con el curso de desarrollador Web Completo";
console.log(cada.length);  //Es para conocer la extencion, Es una propiedad. Cuantas letras tiene

//IndexOf (retorna a la posicion)
console.log(cada.indexOf('javascript')); //Para saber en que posicion se encuentra en la consola. En numeros
console.log(producto.indexOf('javascript'));  //Aparece el -1 es que no tiene esa palabra.

//Includes (retorna True o False)
console.log(cada.includes('javascript')); //Trae un true porque si esta la palabra.
console.log(producto.includes('javascript'));  //Trae un False porque no esta la palabra