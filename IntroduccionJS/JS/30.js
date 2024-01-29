const numero1 = 20;
const numero3 = 10;

console.log(numero1);

try {
    console.log(numero2); //Es para que despues del error se siga ejecutando los demas cogigos.
} catch (error) {
    console.log(error);
}

console.log(numero3);