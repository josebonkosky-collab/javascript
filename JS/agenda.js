class Agenda {
  constructor() {
    this.contactos = [];
  }

    agregarContacto(nombre, telefono) {
    this.contactos.push({ nombre, telefono });
    console.log(`Contacto "${nombre}" agregado con éxito.`);
  }

    buscarContacto(nombre) {
    const contacto = this.contactos.find(
      (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (contacto) {
      console.log(`Encontrado: ${contacto.nombre} - Teléfono: ${contacto.telefono}`);
      return contacto;
    } else {
      console.log(`El contacto "${nombre}" no fue encontrado.`);
      return null;
    }
  }

    listarContactos() {
    if (this.contactos.length === 0) {
      console.log("La agenda está vacía.");
      return;
    }

    console.log("--- Lista de Contactos ---");
    this.contactos.forEach((c, index) => {
      console.log(`${index + 1}. ${c.nombre}: ${c.telefono}`);
    });
  }
}

const miAgenda = new Agenda();
miAgenda.agregarContacto(prompt("Ingrese el nombre del contacto:"), prompt("Ingrese el teléfono del contacto:"));
miAgenda.listarContactos();
miAgenda.buscarContacto(prompt("Ingrese el nombre del contacto a buscar:"));