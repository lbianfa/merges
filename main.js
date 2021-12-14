class Estudiante {

    constructor(nombre, apellido, edad) {
        // atributos
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar() {
        console.log("Hola mundo")
    }

    leer(libro) {
        console.log("Estoy leyendo el libro", libro)
    }

}
