//#########################################################################################################
//#########################################################################################################
//* BUCLES
//#########################################################################################################
//#########################################################################################################

//? for(): es un bucle donde primeramente se define una variable que deba de cumplir con una condición dada.
//?        esta variable a su vez cumplirá una acción luego de cada iteración.
console.log("FOR");
console.log(String("#").repeat(80));
for(let i=1; i<=20; i++){
    console.log(`Intento ${String(i).padStart(2, "0")}: ${String("#").repeat(i)}`);
}


console.log("\n");



//#########################################################################################################
let key = "R";
//? while(): es un bucle que evalua una condición antes de cada iteración
console.log("WHILE");
console.log(String("#").repeat(80));
while(key.length <= 20){
    console.log(`RANITAS (${String(key.length).padStart(2, "0")}): ${key}`);
    key = `${key}R`;
}


console.log("\n");



//#########################################################################################################
key = "R";
//? do while(): es un bucle que se ejecuta al menos una vez, se evalúa una condición al terminar cada iteración
console.log("DO WHILE");
console.log(String("#").repeat(80));
do{
    console.log(`RANITAS (${String(key.length).padStart(2, "0")}): ${key}`);
    key = `${key}R`;
} while(key.length <= 20);


console.log("\n");



//#########################################################################################################
//CREAMOS UNOS OBJETOS RANDOM
let objeto = {
    txt_nombre: "JUDY",
    txt_especie: "CONEJO",
    tip_sexo: "F",
    num_edad: 23,
    txt_color: "Chocolate",
    num_energia: 48
};

let set = new Set(["Caneula", "Stella", "Pelusam", "Nebulam", "Eclipse", { txt_conejo: "Caneula" }, { txt_conejo: "Caneula" }]);

//? for(of): es un bucle que se ejecuta para objetos iterables
console.log("FOR OF");
console.log(String("#").repeat(80));
console.log("IMPRIMIMOS LAS PROPIEDADES DE UN OBJETO");
for(let k of Object.keys(objeto)){
    console.log(`${k} => ${objeto[k]}`);
}
console.log(String("-").repeat(80));
console.log("IMPRIMIMOS LOS ELEMENTOS DE UN SET");
for(let e of set){
    console.log(e);
}

console.log("\n");



//#########################################################################################################
//* BREAK Y CONTINUE
let cuenta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//? continue: es una palabra reservada que nos permite saltarnos una iteración para continuar con la siguiente
console.log("PALABRA RESERVADA: continue");
console.log(String("#").repeat(80));
console.log("SOLO IMPRIMIREMOS NÚMEROS IMPARES:");

for(let n of cuenta){
    //SI ES PAR, ENTONCES CORTAMOS LA ITERACIÓN
    if(n%2==0){
        continue;
    }

    console.log(`Mi número es: ${n}`);
}

console.log("\n");



//? break: es una palabra reservada que nos permite terminar el bucle cuando se quiera
console.log("PALABRA RESERVADA: break");
console.log(String("#").repeat(80));
console.log("SOLO IMPRIMIREMOS NÚMEROS MENORES A 6:");

for(let n of cuenta){
    //SI ES PAR, ENTONCES CORTAMOS LA ITERACIÓN
    if(n>=6){
        break;
    }

    console.log(`Mi número es: ${n}`);
}
