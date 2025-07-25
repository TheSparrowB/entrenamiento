//#########################################################################################################
//#########################################################################################################
//* OPERADORES
//#########################################################################################################
//#########################################################################################################


//#region OPERADORES MATEMÁTICOS
console.error("OPERADORES MATEMÁTICOS");
let x = 7;
let y = 5;

console.log(x + y);     //suma
console.log(x - y);     //resta
console.log(x * y);     //multiplicación
console.log(x / y);     //división

console.log(x % y);     //módulo
console.log(x ** y);    //potencia

x++;                    //incremento
console.log(x);

x--;                    //decremento
console.log(x);
//#endregion


console.log("\n");


//#region OPERADORES DE ASIGNACIÓN
console.error("OPERADORES DE ASIGNACIÓN");
let primera = 7;         //asignación normal

primera += 3;
console.log(`Operador += ${primera}`);

primera -= 3;
console.log(`Operador -= ${primera}`);

primera *= 3;
console.log(`Operador *= ${primera}`);

primera /= 3;
console.log(`Operador /= ${primera}`);

primera %= 4;
console.log(`Operador %= ${primera}`);

primera **= 3;
console.log(`Operador **= ${primera}`);
//#endregion


console.log("\n");


//#region OPERADORES DE COMPARACIÓN
console.error("OPERADORES DE COMPARACION");
let anterior = 45;
let posterior = 67;
let imitador = "45";

console.log(`Operador > ${anterior > posterior}`);
console.log(`Operador < ${anterior < posterior}`);
console.log(`Operador >= ${anterior >= imitador}`);
console.log(`Operador <= ${anterior <= imitador}`);
console.log(`Operador == ${anterior == imitador}`);         //Esto valida únicamente los valores de las variables
console.log(`Operador === ${anterior === imitador}`);       //Esto valida los valores de las variables y sus tipos también
console.log("#".repeat(40));
console.log(`Operador == (nulo y 0) ${null == 0}`);
console.log(`Operador == (nulo y nulo) ${null == null}`);
console.log(`Operador == (nulo y false) ${null == false}`);
console.log(`Operador == (nulo y undefined) ${null == undefined}`);
console.log("#".repeat(40));
console.log(`Operador === (nulo y 0) ${null === 0}`);
console.log(`Operador === (nulo y nulo) ${null === null}`);
console.log(`Operador === (nulo y false) ${null === false}`);
console.log(`Operador === (nulo y undefined) ${null === undefined}`);
console.log("#".repeat(40));
console.log(`Operador != ${anterior != imitador}`);
console.log(`Operador !== ${anterior !== imitador}`);
//#endregion



//#########################################################################################################
//#region TRUTHY Y FALSY VALUES

/** 
 *? Los valores TRUTHY son aquellos que, a pesar de no ser necesariamente un booleano, se les considera 
 *? como tales en situaciones específicas, por ejemplo, cuando se realizan comparaciones. Considerando 
 *? que las variables booleanas solo pueden tener dos valores: "true" y "false", los valores TRUTHY son
 *? aquellos que pueden ser considerados como "true" y los FALSY aquellos que pueden ser considerados como 
 *? "false".
**/


//! VALORES TRUTHY
//Todos los números positivos y negativos, excepto el cero
//Todas las cadenas de texto excepto las vacías
//El booleano "true"


//! VALORES FALSY
//El cero (0), incluso como BigInt (0n)
//El "null"
//El "undefined"
//El "NaN"
//Las cadenas de texto vacías
//El booleano "false"
//#########################################################################################################


console.log("\n");


//#region OPERADORES LÓGICOS
console.error("OPERADORES LÓGICOS");
console.error("and &&");
console.log(5 > 10 && 6 > 15);
console.log(5 < 6 && 10 < 15);
console.log(undefined == null && 0 == false);

console.log("#".repeat(40));

console.error("or ||");
console.log(5 > 10 || 6 < 15);
console.log(5 < 6 || 10 < 15);
console.log(undefined == NaN || 0 == false);
console.log(false == true || null == 45n);

console.log("#".repeat(40));

console.error("not !");
console.log(!(5 > 10 || 6 < 15));
console.log(!14);
console.log(!"   ");
console.log(!"");
console.log(!NaN);
console.log(!(false == true) || null == 45n);
//#endregion


console.log("\n");


//#region OPERADORES TERNARIOS
console.error("OPERADORES TERNARIOS");

const ternarioVerdadero = true;
const ternarioFalso = false;

ternarioVerdadero ? console.log("Se evaluó un ternario verdadero.") : console.log("Qué raro, se supone que esto no debería de salir.");
ternarioFalso ? console.log("Nunca van a ver esta parte xDDDDD.") : console.log("Se evaluó una variable falsa.");
//#endregion