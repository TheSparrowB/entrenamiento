//#########################################################################################################
//#########################################################################################################
//* FUNCIONES
//#########################################################################################################
//#########################################################################################################

//? función clásica: es una función común y corriente. Se la invoca escribiendo su nombre e incluyendo los
//?                 parámetros, en caso los tenga
//? - Presenta el objeto "arguments"
//? - No presenta problemas con el hoisting

console.log("FUNCIÓN CLÁSICA");
console.log(String("#").repeat(80));
//* Se la puede invocar incluso antes de ser creada (hoisting)
primeraFuncion("Karlitos");

function primeraFuncion(txtNombre){
    console.log(arguments);
    console.log(`Jelou ${txtNombre}!!!`);
}

//* Aquí no hay forma de que ocurra algún error
primeraFuncion("Judy");

console.log("\n");



//#########################################################################################################
//? función anónima: es una función que no tiene un nombre, por lo que es necesario asignarla a una variable
//?                 o constante para poder invocarla
//? - Presenta el objeto "arguments"
//? - Sí presenta problemas con el hoisting

console.log("FUNCIÓN ANÓNIMA");
console.log(String("#").repeat(80));

try{
    funcionAnonima("Chester");
}
catch(e){
    console.log("No puedes invocar una función anónima antes de que haya sido asignada.");
}


const funcionAnonima = function(txtNombre){
    console.log(arguments);
    console.log(`El usuario anónimo es ${txtNombre}`);
}

funcionAnonima("Sancho");
