class termometro {
    constructor(celsius) {
        this.temperatura = celsius;
    }

    toFahrenheit() {
        return (this.temperatura * 1.8) + 32;
    }

    toKelvin() {
        return this.temperatura + 273.15;
    }
}
const celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
const termometro1 = new termometro(celsius);
console.log(`Temperatura en Fahrenheit: ${termometro1.toFahrenheit()} °F`);
console.log(`Temperatura en Kelvin: ${termometro1.toKelvin()} K`);  
