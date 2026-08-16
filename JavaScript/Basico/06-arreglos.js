//#########################################################################################################
//#########################################################################################################
//* ARREGLOS
//#########################################################################################################
//#########################################################################################################

let primerArreglo = [];                 //* FORMA MÁS RECOMENDADA DE INSTANCIAR UN ARRAY
let segundoArreglo = new Array();

console.log("Imprimimos los arreglos vacíos");
console.log(primerArreglo);
console.log(segundoArreglo);


console.log("\n");


//? CUANDO SE USA "new" Y SOLO SE LE MANDA UN ÚNICO PARÁMETRO NUMÉRICO, EL ARREGLO PRESENTA UNA
//? LONGITUD CON ELEMENTOS VACÍOS
primerArreglo = [3];
segundoArreglo = new Array(3);

console.log("Imprimimos los arreglos nuevamente");
console.log(primerArreglo);             //* VEMOS UN ARREGLO CON UN ELEMENTO ÚNICO
console.log(segundoArreglo);            //* VEMOS UN ARREGLO CON TRES ELEMENTOS VACÍOS


console.log("\n");


//? SIN EMBARGO, CUANDO SE USA "new" Y SOLO SE LE MANDA UN ÚNICO PARÁMETRO CADENA, EL ARREGLO LO TOMA
//? COMO UN ELEMENTO
primerArreglo = ["Ardilla"];
segundoArreglo = new Array("Ardilla");

console.log("Imprimimos los arreglos con cadenas");
console.log(primerArreglo);             //* VEMOS UN ARREGLO CON UN ELEMENTO ÚNICO
console.log(segundoArreglo);            //* VEMOS UN ARREGLO CON EL MISMO ELEMENTO ÚNICO


console.log("\n");


/**
 *? EN CAMBIO, SI SE LE MANDAN VARIOS PARÁMETROS, ALLÍ SÍ SON TOMADOS COMO ELEMENTOS DEL ARREGLO.
 */
primerArreglo = [1, 2, 3, 4, 5];
segundoArreglo = new Array(1, 2, 3, 4, 5);

console.log("Imprimimos los arreglos otra vez");
console.log(primerArreglo);             //* VEMOS UN ARREGLO CON CINCO ELEMENTOS
console.log(segundoArreglo);            //* VEMOS UN ARREGLO CON LOS MISMOS CINCO ELEMENTOS


console.log("\n");


/**
 *? SIN EMBARGO, ES POSIBLE ASIGNARLE LOS VALORES A LOS ARREGLOS DIRECTAMENTE EN ESPACIOS VACÍOS O NO DEFINIDOS
 */
primerArreglo = [];
segundoArreglo = new Array(3);

primerArreglo[2] = "Lagartija";
primerArreglo[4] = "Hámster";

segundoArreglo[2] = "Cacatúa";
segundoArreglo[4] = "Periquito";        //* A PESAR DE QUE EL SEGUNDO ARREGLO SOLO TIENE RESERVADOS 3 ESPACIOS, IGUAL SE PUEDE ROMPER ESTO

console.log("¿Tiene sentido seguir diciendo que estoy imprimiendo arreglos?");
console.log(primerArreglo);             //* VEMOS UN ARREGLO CON TRES ELEMENTOS VACÍOS Y DOS CADENAS
console.log(segundoArreglo);            //* VEMOS UN ARREGLO CON TRES ELEMENTOS VACÍOS Y DOS CADENAS


console.log("\n");




//#region MÉTODOS COMUNES
//? push(): agrega un elemento al último espacio del arreglo y devuelve el tamaño
console.log("PUSH");
primerArreglo = [];
primerArreglo.push("Lagartija");
primerArreglo.push("Conejo");
primerArreglo.push(77);
primerArreglo.push("Gerbo");
primerArreglo.push(false);
primerArreglo.push(Symbol("Ratita egipcia"));
console.log(`Tamaño del arreglo: ${primerArreglo.push(NaN)}`);
console.log(primerArreglo);



console.log("\n");
//? pop(): elimina al último elemento del arreglo y lo devuelve
console.log("POP");
primerArreglo.pop();
console.log(primerArreglo);

console.log(`Elemento eliminado: ${primerArreglo.pop().toString()}`);           //* EL POP DEVOLVERÁ AL SÍMBOLO PORQUE ES EL ÚLTIMO ELEMENTO DEL ARREGLO
console.log(primerArreglo);

primerArreglo.pop();
console.log(primerArreglo);



console.log("\n");
//? shift(): elimina al primer elemento del arreglo y lo devuelve
console.log("SHIFT");
primerArreglo.shift();                      //* ELIMINAMOS A LA LAGARTIJA
console.log(primerArreglo);

console.log(`Elemento eliminado: ${primerArreglo.shift()}`);         //* ME DEBERÍAN DE DEVOLVER AL CONEJO
console.log(primerArreglo);



console.log("\n");
//? unshift(): agrega elementos al comienzo del arreglo y devuelve el tamaño
console.log("UNSHIFT");
primerArreglo.unshift("Tortuga");
console.log(primerArreglo);
primerArreglo.unshift("Pinzón");
console.log(primerArreglo);
console.log(`Nuevo tamaño del arreglo: ${primerArreglo.unshift(Symbol("LMAO!!!"))}`);
console.log(primerArreglo);



console.log("\n");
//? slice(): crea una copia de la porción de un arreglo dado, empezando desde una posición de origen hasta la posición final (SIN TOMAR EN CUENTA AL ÚLTIMO)
console.log("SLICE");
let copiaArreglo = primerArreglo.slice(2, 4);
console.log(copiaArreglo);
console.log(primerArreglo.slice(0, 0));
console.log(primerArreglo.slice(0, 1));
console.log(primerArreglo.slice(3, 4));
console.log(primerArreglo.slice(3, 5));
console.log(primerArreglo.slice(3, 7));
copiaArreglo = primerArreglo.slice(0, primerArreglo.length);



console.log("\n");
//? splice(): este método elimina los elementos de un arreglo a partir de una posición dada y devuelve los elementos eliminados
console.log("SPLICE");
console.log("Arreglo Inicial:");
console.log(copiaArreglo);
let recortadoArreglo = copiaArreglo.splice(1, 3);
console.log("Arreglo de elementos eliminados");
console.log(recortadoArreglo);
console.log("Arreglo recortado");
console.log(copiaArreglo);

//? También permite agregar nuevos elementos luego de haber eliminado otros
copiaArreglo.push("Ceneula", "Pelusam", "Eclipse", "Nébulam", "Stella");
console.log("Arreglo con nuevos elementos (CONEJOS)");
console.log(copiaArreglo);
copiaArreglo.splice(2, 4, "Kenyi1", "Carmelo1", "Gallineta1", "Kenyi2", "Carmelo2", "Gallineta2", "Kenyi3", "Carmelo3", "Gallineta3");
console.log("Arreglo con todos los conejos eliminados y reemplazados con pollos");
console.log(copiaArreglo);
//#endregion





//#region ARTIFICIOS
console.log("\n");
//? SI SE DESEA VACIAR UN ARREGLO, ENTONCES SOLO BASTA ASIGNARLE UN ARREGLO VACÍO
console.log("Vaciando el primerArreglo:");
primerArreglo = [];
console.log(primerArreglo);


//#endregion
