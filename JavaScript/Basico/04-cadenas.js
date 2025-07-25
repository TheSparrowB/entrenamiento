//#########################################################################################################
//#########################################################################################################
//* CADENAS (STRINGS)
//#########################################################################################################
//#########################################################################################################


//* CONCATENACIÓN
let valor1 = "TODAS LAS ";
let valor2 = "LAGARTIJAS";
console.log(valor1 + valor2 + "SON GRACIOSAS");

//* NOTAR QUE LOS NÚMEROS CUANDO SE "SUMAN" CON VALORES DE TEXTO, SE TRABAJAN COMO CADENAS
let numero1 = 777;
console.log(valor1 + 41);
console.log(valor1 + valor2 + "SON GRACIOSAS " + numero1);
console.log(valor1 + valor2 + "SON GRACIOSAS " + numero1 + 34);
console.log(valor1 + valor2 + "SON GRACIOSAS " + numero1 + (2 + 5));


console.log("\n");


//* LONGITUD
let valor3 = "ranitas"
console.error("Procedemos a obtener la longitud de la palabra 'ranitas'");
console.log(valor3.length);


/** 
 ** TOMAR EN CUENTA QUE LAS CADENAS DE TEXTO SON TRATADAS COMO ARREGLOS, ES DECIR,
 ** PODEMOS ACCEDER A SUS CARACTERES DE LA MISMA FORMA COMO UN ITEM DE UN ARREGLO
 */
console.error("Procedemos a obtener el tercer caracter de la palabra 'ranitas'");
console.log(valor3[2]);
console.error("Procedemos a tratar de obtener un caracter que se encuentra fuera del índice de la palabra 'ranitas'");
console.log(valor3[2500]);


console.log("\n");


//* METODOS COMUNES
let valor4 = "Wacha a esa ranita, mira qué bonita!!!";
console.log(valor4.toUpperCase());
console.log(valor4.toLowerCase());
console.log(valor4.indexOf("esa"));         //DEVUELVE EL INDICE DE DONDE EMPIEZA LA PALABRA DADA
console.log(valor4.indexOf("c"));           //DEVUELVE EL INDICE DE LA PRIMERA OCURRENCIA
console.log(valor4.indexOf("pussey"));      //SI LA CADENA ENVIADA NO EXISTE, RETORNA -1
console.log(valor4.includes("ranita"));
console.log(valor4.slice(8, 18));           //CORTA UN FRAGMENTO DESDE EL PRIMER ÍNDICE HASTA EL ÚLTIMO INDICE (MENOS 1)
console.log(valor4.replace("ranita", "carita"));


console.log("\n");


//* PLANTILLAS
let plantilla1 = `Hola señores
            teveluneulo fauna papelina`;
let plantilla2 = `${valor2} chotas, siempre sueltan sus colas.`;

console.log(plantilla1);
console.log(plantilla2);


