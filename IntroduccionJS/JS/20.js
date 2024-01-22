//Metodos de propirdad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduccion Cancion con el ID: ${id}`)
    },
    pausar: function(){
        console.log('Pausando....');
    },
    crearPlaylist: function(nombre){
        console.log(`Crear una Playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproducir Playlist: ${nombre}`);
    }
}
reproductor.borrarCancion =function(id){
    console.log(`Eliminando la cancion: ${id}`);
}
console.log(reproductor); //Para imprimir el objeto
reproductor.reproducir(3840); //Para imprimir el metodo
reproductor.pausar(); //Para imprimir el metodo
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Ejercicio'); 
reproductor.reproducirPlaylist('Ejercicio'); 