class libro {
    constructor (titulo, autor, paginas){
        this.titulo=titulo;
        this.autor=autor;
        this.paginas=paginas;
    }
    leer() {
        console.log (`Estas leyendo ${this.titulo}`)}
    esLargo() {
        if (this.paginas > 300)
        console.log (`Es largo`)
    }
    }

const libro1 = new libro ("El Principito", "Antoine de Saint", 310)
libro1.leer();
libro1.esLargo();