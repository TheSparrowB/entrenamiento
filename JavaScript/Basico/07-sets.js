//#########################################################################################################
//#########################################################################################################
//* SETS
//#########################################################################################################
//#########################################################################################################

//! DE ESTA FORMA SE INICIALIZA UN SET VACÍO
let primerSet = new Set();
//! ESTO TIENE UN COMPORTAMIENTO EXTRAÑO, Y ES PORQUE UN SET SOLO ACEPTA UNA LISTA EN SU CONSTRUCTOR
let segundoSet = new Set("Caneula", "Stella", "Pelusam");

console.log("IMPRIMIMOS UN SET VACÍO");
console.log(primerSet);
//! ASIMISMO, UN SET NO ADMITE OBJETOS IGUALES EN SU COLECCIÓN
console.log("IMPRIMIMOS UN SET MAL INICIALIZADO");
console.log(segundoSet);

//? CORRECTA FORMA DE INICIAR UN SET
let tercerSet = new Set(["Caneula", "Stella", "Pelusam", "Nebulam"]);
console.log("IMPRIMIMOS UN SET CORRECTAMENTE INICIALIZADO");
console.log(tercerSet);

//? CON ESTO VERIFICAMOS QUE UN SET NO PUEDE ADMITIR ELEMENTOS DUPLICADOS
let cuartoSet = new Set(["Caneula", "Stella", "Pelusam", "Nebulam", "Stella", "Pelusam", "Caneula", "Eclipse"]);
console.log("LOS SETS SOLO ADMITEN ELEMENTOS ÚNICOS");
console.log(cuartoSet);



//#region MÉTODOS COMUNES
    console.log("\n");
    //? add(): este método agrega un nuevo elemento en el set en su última posición
    console.log("ADD");
    primerSet.add("Caneula");
    primerSet.add("Judy");
    primerSet.add("Stella");
    console.log(primerSet);


    console.log("\n");
    //? delete(): este método elimina al elemento de su colección que se le haya enviado como parámetro, retorna 'true' si pasó algo o 'false' si nada
    console.log("DELETE");
    primerSet.delete("Caneula");
    console.log("Eliminamos a la Caneula");
    console.log(primerSet);


    console.log("\n");
    //? has(): este método indica si contiene al elemento en su colección
    console.log("HAS");
    console.log("El SET no tiene a Caneula, fue asesinada");
    console.log(primerSet.has("Caneula"));
    console.log("Sin embargo, sí tiene a Judy");
    console.log(primerSet.has("Judy"));


    console.log("\n");
    //* DE ESTE FORMA TRANSFORMAMOS UN SET A UN ARREGLO
    let primerArreglo = Array.from(primerSet);
    console.log("Imprimimos un arreglo que se creó a partir de un SET");
    console.log(primerArreglo);

//#endregion
