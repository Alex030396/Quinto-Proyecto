const usarioAutenticado = new Promise ( (resolve, reject) => {
    const auth = false;
    if (auth) {
        resolve('Usuario autenticado'); //El promise se cumple
    } else {
        reject('No se pudo iniciar sesion');  //El promise no se cumple
    }
});

usarioAutenticado
    .then( (resultado)=> console.log(resultado))  //Para cuando sea verdadero
    .catch( (error) => console.log(error));     //Para cuando se falso
//En el promise existe 3 valores
//Pending : No se ha cumplido pero tampoco se ha rechazado
//Fulfilled : Ya se cumplio 
//Rejected : Se ha rechazado o no se pudo cumplir