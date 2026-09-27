class Rectangulo {
  constructor(ancho, altura) {
    this.ancho = ancho;
    this.altura = altura;
  }

  calcularArea() {
    return this.ancho * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.ancho + this.altura);
  }

  esCuadrado() {
    return this.ancho === this.altura;
  }
}

const rectangulo1 = new Rectangulo(parseFloat(prompt("Ingrese el ancho del rectángulo:")), parseFloat(prompt("Ingrese la altura del rectángulo:")));
console.log(`Área del rectángulo: ${rectangulo1.calcularArea()}`);
console.log(`Perímetro del rectángulo: ${rectangulo1.calcularPerimetro()}`);
console.log(`¿Es un cuadrado? ${rectangulo1.esCuadrado()}`);
