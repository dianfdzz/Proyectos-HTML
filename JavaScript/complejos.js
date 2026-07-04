// const nombre = "Juan Perez";
// console.log("hola", nombre);

// // Variables primitivas 

// let variableNumero = 1;
// console.log("VariableNumero", variableNumero);
// console.log("VariableNumero es del ripo de datos ", typeof (vairiableNumero));

// let variableCaracteres = "Caracteres";
// console.log("VariableCaracteres", variableCaracteres);
// console.log("Variable Caracteres es del tipo de datos ", typeof (variableCaracteres));

// let variableBoolean = true;
// console.log("VariableBoolean", variableBoolean);
// console.log("VariableBoolean es del tipo de datos ", typeof (variableBoolean));

// let variableNull = null;
// console.log("VariableNull", variableNull);
// console.log("VariableNull es del tipo de datos ", typeof (variableNull));

// let variableUndefined;
// console.log("Variable", variableUndefined);
// console.log("Variable es del tipo de datos ", typeof (variableUndefined));

// let variableSymbol = Symbol();
// console.log("VariableSymbol", variableSymbol);
// console.log("VariableSymbol es del tipo de datos ", typeof (variableSymbol));

// let variableBigInt = 1111111111111111111111111111111;
// console.log("Variable", variableBigINT);
// console.log("Variable es del tipo de datos ", typeof (variableBigInt));

// // Ejemplo de objeto

// let persona = {
//     nombre: "Juan Perez",
//     correo: " juan@unphu.edu.do",
//     edad: 20
// }

// console.log("Variable", persona);
// console.log("Variable tipo:", typeof(persona));
// console.log("Variable:", persona.nombre);
// console.log("Variable:", persona.correo);

// persona.nombre ="Veronica";

// // Arreglos
// let frutas = ["pera", "manzana", "fresa"];
// console.log("Variable:", frutas);
// console.log("Variable tipo:", typeof(frutas));
// console.log("Indice 0", frutas[0]);

// frutas[5] = "sandia";
// console.log("Variable:", frutas);

// Funciones 

// Operadores aritmeticos
let a= 8;
let b= 3;
console.log(a + b, "Suma");
console.log(a - b, "Resta");
console.log(a * b, "Multiplicacion");
console.log(a / b, "Division");
console.log(a % b, "Modulo");
console.log(a ++, "Incremento");
console.log(a --, "Decremento");
console.log(++a, "Unario");
console.log(--a, "Unario");

// Operadores de asignacion 
a = 2;
console.log(a, "a =1");
a += 2;
console.log(a, "a += 2");
a -= 2;
console.log(a, "a -= 2");
a *= 2;
console.log(a, "a *= 2");

// Comparacion 
console.log(a > 5, "a > 5");
console.log(a <= 5, "a <= 5");
console.log(a == 5, "a ==5"); 
console.log(a === 5, "a ===5")  
console.log(a != "5", "a != 5");
console.log(a !== 5, "a !== 5");

// Operadores logicos

// && (AND)
console.log(true && false, "true && false");
console.log(true && true, "true && true");
console.log(false && false, "false && false");
// || (OR)
console.log(true || false, "true || false");
console.log(true || true, "true || true");
console.log(false || false, "false || false");
// ! (NOT)
console.log(!true, "!true");
console.log(!false, "!false");

// Operadores ternarios
// ?
let edad = 15;
let accede = edad>= 18 ? "Puede acceder" : "No puede acceder";
console.log(accede, "Operador ternario");

// Control de flujo
// IF

if (edad >= 18) {
    console.log("Puede acceder");
} 
else if (edad >= 15) {
    console.log("Puede acceder con supervisión");
}
else {
    console.log("No puede acceder");
}

// FOR
for (let i=0; i<5; i++){
    console.log("for Variable i", i);
}

// WHILE
let i = 0;
while (i < 10){
    console.log("while Variable i", i);
    i ++;
}

// DO WHILE
i = 0;
do{
    console.log("do while Variable i", i);
    i ++;

} while (i < 10);  

// SWITCH
let diaSemana = "Lunes";
switch ("diaSemana") {
    case "Lunes":
        console.log("Hoy es lunes");
        break;
    case "Martes":
        console.log("Hoy es martes");
        break;
    case "Miercoles":
        console.log("Hoy es miercoles");
        break;
    case "Jueves":
        console.log("Hoy es jueves");
        break;
    case "Viernes":
        console.log("Hoy es viernes");
        break;
    case "Sabado":
        console.log("Hoy es sabado");
        break;
    case "Domingo":
        console.log("Hoy es domingo");
        break;
    default:
        console.log("Dia no valido");
        break;
}

