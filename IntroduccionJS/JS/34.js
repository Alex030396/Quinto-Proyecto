function obtenerEmpleados() {
    const archivo =  'empleados.json'
    fetch(archivo)
        .then( resultado =>{
            return resultado.json();
        })
        .then(datos => {
            console.log(datos);   //Lo abre como un arreglo
            console.log(datos.empleados); //Abre directo adentro del arreglo.
            const {empleados} = datos
            console.log(empleados); //La misma funcion de arriba
            
            empleados.forEach( resultado=> {  //Para cada arreglo por separado.
                console.log(resultado);
                console.log(resultado.nombre); //Para trae los nombres uno por uno.
                
                document.querySelector('.contenido').textContent = resultado.nombre;
            })
        }) 
}
async function obtenerEmpleados() {
    const archivos =  'empleados.json';
    const resultados = await fetch(archivos);
    const dato = await resultados.json();
    console.log(dato);
}
obtenerEmpleados();