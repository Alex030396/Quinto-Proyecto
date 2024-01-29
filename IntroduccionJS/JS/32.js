//Document es para seleccionar todo el HTML. Todo el contenido que halla en el.
const boton = document.querySelector('#boton');  //Para poder seleccionar del html. Con el # seleccionas el id del elelemto de html.
boton.addEventListener('click', function() {
    console.log('dar click');  //Este evento hace que cuando le des al boton muestre en resultado.
});  //addEventLister es para agregar eventos en Javascript para el html. 
boton.addEventListener('click', () => {    //Es para pedir permiso de notificacion al usuario.
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`)) //Para saber si permitio o bloqueo el permiso.
});

if(Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.jpg',
        body: 'Codigo con Juan, los mejores tutoriales' 
    })
}