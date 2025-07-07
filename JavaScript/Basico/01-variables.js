//#########################################################################################
//#########################################################################################
//* VARIABLES
//#########################################################################################
//#########################################################################################

//* VAR
//? FUE LA FORMA ORIGINAL PARA PODER CREAR VARIABLES
//? PUEDE TENER UN ÁMBITO GLOBAL Y DE BLOQUE
//? SON VARIABLES QUE PUEDEN SER DECLARADOS Y AUTOMÁTICAMENTE SON INICIALIZADOS CON "undefined"
//! SIN EMBARGO, NO ES RECOMENDABLE USARLO DE FORMA INDISCRIMINADA
var primeraVariable = "JELOU";
console.log(primeraVariable);

primeraVariable = "ADIOS";
console.log(primeraVariable);

console.log("\n");

//? AQUI, POR EJEMPLO, ACCEDEMOS A LA VARIABLE ANTES DE SIQUIERA DECLARARLA
console.log(primeraAnomalia);
var primeraAnomalia = "EQUIS DE";
console.log(primeraAnomalia);

//? ASIMISMO, LA VARIABLE DE TIPO "VAR" PUEDE SER REDECLARADA INFINITAS VECES
var primeraAnomalia = "EQUIS TRES";
console.log(primeraAnomalia);

console.log("\n");



//* LET
//? SOLO SON ACCESIBLES DENTRO DE UN BLOQUE
//? LAS VARIABLES LET PUEDEN SER MODIFICADAS
let segundaVariable = "ranitas";
console.log(segundaVariable);

segundaVariable = "ranitas chotas";
console.log(segundaVariable);

console.log("\n");



//* CONST
//? SON VARIABLES CON UN VALOR CONSTANTE, NO PUEDEN SER REASIGNADOS
//? TIENEN QUE SER INICIALIZADOS
//? SIN EMBARGO, ESTO NO IMPLICA QUE SEAN INMUTABLES, YA QUE, SI SE UTILIZA CON REFERENCIAS
//? ENTONCES LOS VALORES PUEDEN CAMBIAR PERO LA REFERENCIA NO.
try{
    const terceraVariable = "HIGH VOLTAGE!";
    console.log(terceraVariable);

    terceraVariable = "HIGGGGGGH!!!";
}
catch(e){
    console.error("LOS CONST NO PUEDEN SER REASIGNADOS!!!")
}
