// Async // await
function descargarNuevosClientes() {
    return new Promise( resolve =>{
        console.log('Descargando clientes .... espere');
        setTimeout(() => {
            resolve('los clientes fueron descargados')
        }, 3000);
    });
}
function descargarUltimosPedidos() {
    return new Promise( resolve =>{
        console.log('Descargando pedidos .... espere');
        setTimeout(() => {
            resolve('los pedidos fueron descargados')
        }, 3000);
    });
}
async function app(){
    try {
        // const cliente = await descargarNuevosClientes();  //Si dejamor los codigos asi primero ejecuta uno y despues el otro sumando los dos tiempos de descarga
        // const pedido = await descargarUltimosPedidos();
        // console.log(cliente);
        // console.log(pedido);
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);//Para traer los dos archivos simultaneos cada uno en su propio tiempo.
        console.log(resultado[0]); //La posicion de cada uno para que no te traiga en la consola un arreglo
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
};
app();

setTimeout( function(){                 //Para mostrar en un tiempo determinado.
    console.log('set timeout ...');
}, 5000);
setInterval( function(){                 //Para mostrar por intervalos.
    console.log('set timeout ...');
}, 5000);
