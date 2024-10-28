class Game{
    ancho;
    alto;
    cantColumnas; //Valores calculados a partir de la "ancho"
    cantFilas;//Valores calculados a partir de la "alto"
    altoCelda;
    anchoCelda;
    estadoJuego;

    constructor(_ancho,_alto, _estadoJuego){
        this.ancho = _ancho;
        this.alto = _alto;
        this.estadoJuego = _estadoJuego;

        var utilsObj = new Utils();
        this.cantColumnas = CANT_COLUMNAS; //utilsObj.Redondear(this.ancho);
        this.cantFilas = CANT_FILAS; //utilsObj.Redondear(this.alto);
        this.anchoCelda = utilsObj.Redondear(this.ancho/this.cantColumnas);
        this.altoCelda = utilsObj.Redondear(this.alto/this.cantFilas);


        console.log("cantColumnas", this.cantColumnas)
        console.log("CantFilas", this.cantFilas)

        console.log("anchoCelda", this.anchoCelda)
        console.log("altoCelda", this.altoCelda)

    }

    start(){
        this.estadoJuego = "playing";
        //Iniciar otros elementos como tanques,puntuacion,etc.

    }

    reset(){
        this.estadoJuego = "reset";
        // Reiniciar las posiciones de los tanques, puntuaciones, etc.

    }
    
}