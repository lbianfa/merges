class Estudiante {

    constructor(nombre, apellido, edad) {
        // atributos
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    leer(libro) {
        console.log("Estoy leyendo el libro",libro)
    }
    
    saludar() {
        console.log("Hola mundo")
    }

}
