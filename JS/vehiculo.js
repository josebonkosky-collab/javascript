class auto {
    constructor(marca, modelo, encendido, combustible) {
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = encendido;
        this.combustible = combustible;
    }

    conducir() {
        if (this.encendido.toUpperCase() === "SI" && this.combustible > 0) {
            console.log("El auto esta encendido y tiene combustible, puede conducir");
        } else {
            console.log("No puede conducir, el auto esta apagado o no tiene combustible");
        }
    }
    consumo() {
        return this.combustible * 0.1;
    }
}
    const marca = prompt("Ingrese la marca del auto:");
    const modelo = prompt("Ingrese el modelo del auto:");
    const encendido = prompt("¿El auto está encendido? (SI/NO):");
    const combustible = parseFloat(prompt("Ingrese la cantidad de combustible del auto:"));
    const auto1 = new auto(marca, modelo, encendido, combustible);
console.log(`Marca: ${auto1.marca}`);
console.log(`Modelo: ${auto1.modelo}`);
console.log(`Encendido: ${auto1.encendido}`);
console.log(`Combustible: ${auto1.combustible}`);
auto1.conducir();
console.log(`Usted puede recorrer ${auto1.consumo()} km con el combustible disponible`);
