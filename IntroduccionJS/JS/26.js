// this  No puedes crear una variable con este nombre
const reservacion = {
    nombre: 'Alex',
    apellido: 'Briceño',
    total: 1200,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre}. Tiene que pagar ${this.total}Bs`); //this es para llamar a las propiedades dentro del objeto
    }
}
reservacion.informacion();
const reservacion1 = {
    nombre: 'Alex',
    apellido: 'Briceño',
    total: 1200,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${reservacion1.nombre}. Tiene que pagar ${reservacion1.total}Bs`);
    }
}
reservacion1.informacion();