//* FUNCIÓN CLÁSICA
//? Trabaja normalmente con el hoisting
//? Presenta el objeto "arguments"
function disparar(txtNombre, numVeces){
    console.log("Imprimiendo los argumentos de la función disparar.");
    console.log(arguments);
    console.log(arguments["0"]);
    return `Se disparó a ${txtNombre} ${numVeces} veces.`;
}

console.log(disparar("MEMIN", 6));
console.log("");


//* FUNCIÓN ANÓNIMA
//? Retorna error cuando se aplica hoisting
let atacar = function(txtNombre, numVeces){
    console.log("Imprimiendo los argumentos de la función atacar.");
    console.log(arguments);
    console.log(arguments["0"]);
    return `Se atacó a ${txtNombre}`;
}

console.log(atacar("MEMIN"));
console.log("");


//* FUNCIÓN FLECHA
//? Es un tipo de función anónima
//? Cuando tiene un solo parámetro, no es necesario que tenga paréntesis
//? No necesita la palabra reservada function
//? No posee un objeto "arguments"
//? Si el cuerpo tiene solo una línea, no hay necesidad de incluir un "return"
let ofender = txtNombre => `Se ofendió a ${txtNombre}`;

let ignorar = (txtNombre, numVeces) => {
    console.log("Imprimiendo los argumentos de la función ignorar.");
    return `Se ignoró a ${txtNombre} ${numVeces} veces.`;
}

console.log(ofender("MEMIN"));
console.log(ignorar("MEMIN"));
