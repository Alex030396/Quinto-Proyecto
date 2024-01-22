const metodoPago = 'bitcoin';
switch (metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'efectivo':
        console.log('El usuario va a pagar con cheque, revisaremos  los fondos del permiso');
        break;
    case 'bitcoin':
        console.log('Pagaste con bitcoin');
        break;
    default:
        console.log('Aun no has pagado');
        break
}
