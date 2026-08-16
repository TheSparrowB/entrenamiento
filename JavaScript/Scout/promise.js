//! SE TIENE EL SIGUIENTE ESCENARIO
//* Existe una función que llama a un servidor para poder obtener información. Sin embargo,
//* este servicio demora un segundo y medio para responder.
liberarRanita = (ranita) => {
    setTimeout(() => ranita, 1500);
}

//* Entonces, haciendo una llamada, como el servidor no responde inmediatamente, se obtiene
//* un valor indefinido porque el servidor aún demorará en devolver una respuesta.
console.log("HACIENDO UNA LLAMADA AL SERVIDOR");
console.log(liberarRanita({ txt_ranita: "Arborícola" }));


//! SIN EMBARGO, EXISTE UNA SOLUCIÓN
//* Para poder esperar hasta que la función nos retorne un resultado, existe algo llamado
//* "Promise". Este tipo de objetos admite dos parámetros, uno para indicar que el proceso
//* terminó "resolve" y el otro para indicar que ocurrió un inconveniente "reject".
dejarRanita = (ranita) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ranita.txt_ranita == "Fuego"){
                reject("La ranita fue asesinada a sangre fría.");
            }

            console.log("HUEHUEHUE");
            resolve(`La ranita ${ranita.txt_ranita} ha sido liberada.`);
        }, 1500);
    });
}

//* Y, simplemente llamamos a la función mediante sus funciones "then" y "catch".
console.log("\nVolvemos a llamar al servidor");
dejarRanita({ txt_ranita: "Insectívora" }).then((m) => console.log(m));
dejarRanita({ txt_ranita: "Fuego" }).then((m) => console.log(m)).catch((e) => { console.error(e); });


