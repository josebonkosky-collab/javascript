class producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    aplicarDescuento(descuento) {
        if (descuento > 0 && descuento < 100) {
            const descuentoAplicado = this.precio * (descuento / 100);
            this.precio -= descuentoAplicado;
            console.log(`Descuento aplicado: ${descuento}%. Nuevo precio: $${this.precio}`);
        } else {
            console.log("Descuento inválido. Debe estar entre 0 y 100.");
        }
    }
        vender(cantidad) {
            if (this.stock >= cantidad) {
                this.stock -= cantidad;
                console.log(`Venta realizada: ${cantidad} unidades de ${this.nombre}. Stock restante: ${this.stock}`);
            } else {
                console.log("No hay suficiente stock para realizar la venta.");
            }
        }
    }

const nombreProducto = prompt("Ingrese el nombre del producto:");
const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
const stockProducto = parseInt(prompt("Ingrese el stock del producto:"));
const producto1 = new producto(nombreProducto, precioProducto, stockProducto);
console.log(`Producto: ${producto1.nombre}`);
console.log(`Precio: $${producto1.precio}`);
console.log(`Stock: ${producto1.stock}`);
const descuento = parseFloat(prompt("Ingrese el porcentaje de descuento a aplicar:"));
producto1.aplicarDescuento(descuento);
const cantidadVenta = parseInt(prompt("Ingrese la cantidad a vender:"));
producto1.vender(cantidadVenta);
