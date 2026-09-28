class reloj {
    constructor() {
        this.hora = 0;
        this.minuto = 0;
        this.segundo = 0;
    }
    tick() {
        this.segundo++;

        if (this.segundo === 60) {
            this.segundo = 0;
            this.minuto++;
        }

        if (this.minuto === 1) {
            this.minuto = 0;
            this.segundo = 0;
        }
    }
}



const reloj1 = new reloj();
setInterval(() => {
    reloj1.tick();
    console.log(`Hora: ${reloj1.hora}:${reloj1.minuto}:${reloj1.segundo}`);
}, 1000);
