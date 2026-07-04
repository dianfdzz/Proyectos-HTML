const nombre = "Juan Perez";
console.log("hola", nombre);

// Variables primitivas 

let variableNumero = 1;
console.log("VariableNumero", variableNumero);
console.log("VariableNumero es del ripo de datos ", typeof (vairiableNumero));

let variableCaracteres = "Caracteres";
console.log("VariableCaracteres", variableCaracteres);
console.log("Variable Caracteres es del tipo de datos ", typeof (variableCaracteres));

let variableBoolean = true;
console.log("VariableBoolean", variableBoolean);
console.log("VariableBoolean es del tipo de datos ", typeof (variableBoolean));

let variableNull = null;
console.log("VariableNull", variableNull);
console.log("VariableNull es del tipo de datos ", typeof (variableNull));

let variableUndefined;
console.log("Variable", variableUndefined);
console.log("Variable es del tipo de datos ", typeof (variableUndefined));

let variableSymbol = Symbol();
console.log("VariableSymbol", variableSymbol);
console.log("VariableSymbol es del tipo de datos ", typeof (variableSymbol));

let variableBigInt = 1111111111111111111111111111111;
console.log("Variable", variableBigINT);
console.log("Variable es del tipo de datos ", typeof (variableBigInt));

// Ejemplo de objeto

let persona = {
    nombre: "Juan Perez",
    correo: " juan@unphu.edu.do",
    edad: 20
}

console.log("Variable", persona);
console.log("Variable tipo:", typeof(persona));
console.log("Variable:", persona.nombre);
console.log("Variable:", persona.correo);

persona.nombre ="Veronica";

