class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }



    saludo() {
        console.log("Hola, mi nombre es:", this.nombre, "y tengo:", this.edad, "años");
    }
}

let PrimeraPersona = new Persona("Paola", 27);
PrimeraPersona.saludo();
console.log("Nombre:", PrimeraPersona.nombre);
console.log("Edad:", PrimeraPersona.edad);

// Herencia 

class Estudiante extends Persona{
    constructor(nombre, edad, carrera){
        super(nombre, edad);
    this.carrera= carrera;
    }

    estudiar(){
        console.log("Estoy estudiando:", this.carrera);

    }
}

let PrimerEstudiante = new Estudiante("Cecilia", 20, "Ingenieria en Sistemas");
PrimerEstudiante.saludo();
PrimerEstudiante.estudiar();
console.log("Nombre:", PrimerEstudiante.nombre);
console.log("Edad:", PrimerEstudiante.edad);
console.log("Carrera:", PrimerEstudiante.carrera);

