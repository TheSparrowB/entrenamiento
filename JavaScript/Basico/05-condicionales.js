//#########################################################################################################
//#########################################################################################################
//* CONDICIONALES
//#########################################################################################################
//#########################################################################################################

let numPoder = Math.floor(Math.random()*100);
let numDerivado = Math.ceil(numPoder/15);
console.log(`El poder de la ranita es ${numPoder}`);
console.log(`El índice del día es ${numDerivado}`);
console.log("#".repeat(40));


console.log("\n");


//if - else if - else
console.log(`Condicional IF`);
if(numPoder <= 50){
    console.log("El poder acumulado es muy bajo.");
}
else if(numPoder <= 75){
    console.log("El poder de la ranita es medio.");
}
else{
    console.log("La ranita ha entrenado lo suficiente.");
}


console.log("\n");


//condicional ternario
console.log(`Operador ternario`);
numPoder <= 50 ? console.log("Ranita debilucha.") : console.log("Ranita promedio.");
numPoder <= 75 ? console.log("Ranita promedio.") : console.log("Ranita mamadota");


console.log("\n");


//switch
console.log(`Switch`);
switch(numDerivado){
    case 1: console.log("Hoy es Lunes"); break;
    case 2: console.log("Hoy es Martes"); break;
    case 3: console.log("Hoy es Miércoles"); break;
    case 4: console.log("Hoy es Jueves"); break;
    case 5: console.log("Hoy es Viernes"); break;
    case 6: console.log("Hoy es Sábado"); break;
    default: console.log("Hoy es DOMINGOOOOOO!!!");
}


