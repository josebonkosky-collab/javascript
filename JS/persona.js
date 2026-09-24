class Persona {
  constructor(nombre, edad, pais) {
    this.nombre = nombre;
    this.edad = edad;
    this.pais = pais;
  }

  presentarse() {
    console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy de ${this.pais}.`);
  }
}

const persona1 = new Persona("Juan", 25, "Argentina");
persona1.presentarse();
