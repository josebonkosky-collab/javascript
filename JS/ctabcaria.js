class cuenta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Depósito exitoso de: $${cantidad}. Saldo nuevo: $${this.saldo}`);
        } else {
            console.log("Monto a depositar inválido");
        }
    }
    retirar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Retiro exitoso de: $${cantidad}. Saldo nuevo: $${this.saldo}`);
        } else {
            console.log("Saldo insuficiente");
            }
        }
    }



const titular = prompt("Ingrese el nombre del titular:");
const saldoInicial = parseFloat(prompt("Ingrese el saldo inicial:"));
const cuenta1 = new cuenta(titular, saldoInicial);
console.log(`Titular: ${cuenta1.titular}`);
console.log(`Saldo actual: ${cuenta1.saldo}`);
const montoDeposito = parseFloat(prompt("Ingrese el valor a depositar:"));
cuenta1.depositar(montoDeposito);
const montoRetiro = parseFloat(prompt("Ingrese el valor a retirar:"));
cuenta1.retirar(montoRetiro);

