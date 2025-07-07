//#########################################################################################
//#########################################################################################
//* TIPOS DE DATOS
//#########################################################################################
//#########################################################################################


//* STRING
//? REPRESENTAN CADENAS DE TEXTO
//? SE PUEDEN USAR CON COMILLAS DOBLES, SIMPLES Y ESPECIALES
let primerString = "Hola a todos";
let segundoString = 'me llamo Bryan';
let tercerString = `${primerString}, ${segundoString} y soy negro xD`;

console.error("IMPRIMIMOS CADENAS DE TEXTO");
console.log(primerString);
console.log(segundoString);
console.log(tercerString);

console.log("\n");



//* NÚMEROS
//? REPRESENTAN VALORES NUMÉRICOS, TANTO ENTEROS COMO DECIMALES
//? PIERDE PRECISIÓN SI EXCEDE EL VALOR "Number.MAX_SAFE_INTEGER"
let primerEntero = 7;
let primerDecimal = 10.75;

console.error("IMPRIMIMOS VALORES NUMÉRICOS");
console.log(primerEntero);
console.log(primerDecimal);
console.log(Number.MAX_SAFE_INTEGER);

//! PARA REVISAR SI REALMENTE EXISTE PÉRDIDA DE PRECISIÓN
console.error("EVITAR USAR NÚMEROS QUE EXCEDAN EL VALOR 'Number.MAX_SAFE_INTEGER', SE PIERDE LA PRECISIÓN");
console.log(9007199254740991+24 == 9007199254740991+25);

console.log("\n");



//* BOOLEANOS
//? REPRESENTAN VALORES "false" y "true"
let primerBooleano = true;
let segundoBooleano = false;

console.error("IMPRIMIMOS VALORES BOOLEANOS");
console.log(primerBooleano);
console.log(segundoBooleano);

console.log("\n");



//* UNDEFINED
//? ES UN TIPO DE DATO QUE NO REPRESENTA UN VALOR DEFINIDO
let primerUndefined;
console.error("IMPRIMIMOS UN VALOR SIN DEFINIR");
console.log(primerUndefined);

console.log("\n");



//* NULL
//? AL IGUAL QUE EL "undefined" INDICA AUSENCIA DE VALOR
//? PERO SE DIFERENCIA PORQUE EL NULL SOLO SE PUEDE ASIGNAR DE FORMA INTENCIONAL
let primerNull = null;
console.error("IMPRIMIMOS UN VALOR NULO");
console.log(primerNull);

console.log("\n");



//* SYMBOL
//? REPRESENTAN VALORES ÚNICOS
let primerSimbolo = Symbol("simbolo");
let segundoSimbolo = Symbol("simbolo");
console.error("IMPRIMIMOS SÍMBOLOS");
console.log(primerSimbolo);
console.log(segundoSimbolo);
console.error("UN SÍMBOLO NUNCA PODRÁ SER IGUAL A OTRO SÍMBOLO");
console.log(primerSimbolo == segundoSimbolo);

//? ASIMISMO, SI LOS SÍMBOLOS SON USADOS COMO IDENTIFICADORES DE ARREGLOS, NO PUEDEN TRABAJARSE DE FORMA NORMAL
let objetoPrueba = {
    a: "Había",
    b: "una vez",
    [Symbol('a')]: "Veo"
}
objetoPrueba[Symbol("a")] = "un pequeño";
objetoPrueba[Symbol("b")] = "ROEDOR";
objetoPrueba[Symbol("a")] = "FIN!!!";

console.error("#########################################");
console.warn("IN NORMAL");
for(let prop in objetoPrueba){
    console.log(objetoPrueba[prop]);
}
console.warn("OF DE PROPIEDADES");
for(let prop of Object.getOwnPropertyNames(objetoPrueba)){
    console.log(objetoPrueba[prop]);
}
console.warn("OF DE SIMBOLOS");
for(let prop of Object.getOwnPropertySymbols(objetoPrueba)){
    console.log(objetoPrueba[prop]);
}

console.log("\n");




//* BIGINT
//? SIRVE PARA REPRESENTAR UN NÚMERO MUY GRANDE
//? LLEVAN UNA 'n' AL FINAL
let primerBigInt = BigInt(237382957235832658926359265926592598);
let segundoBigInt = BigInt(56n);
console.error("IMPRIMIMOS BIGINTS");
console.log(primerBigInt);
console.log(segundoBigInt);


//? A DIFERENCIA DE LOS NUMBER, LOS BIGINT SÍ SON PRECISOS INCLUSO SI SON MAYORES A 'Number.MAX_SAFE_INTEGER'
console.error("LOS BIGINT, SÍ SON MÁS PRECISOS AL SUPERAR EL 'MAX_SAFE_INTEGER'");
console.log(9007199254740991n+24n == 9007199254740991n+25n);
