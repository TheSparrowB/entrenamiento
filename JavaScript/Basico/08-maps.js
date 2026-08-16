//#########################################################################################################
//#########################################################################################################
//* MAPS
//#########################################################################################################
//#########################################################################################################

let primerMapa = new Map();
console.log("IMPRIMIMOS UN MAPA VACÍO");
console.log(primerMapa);

let segundoMapa = new Map([
    ["nombre", "Judy"],
    ["poder", "Tierra"],
    ["edad", 3]
]);
console.log("IMPRIMIMOS UN MAPA CORRECTAMENTE INICIALIZADO");
console.log(segundoMapa);


//#region MÉTODOS COMUNES
    let objeto = { "pollo": "Karlitos", "habilidad": "Patada de Casuario" };

    console.log("\n");
    //? set(): este método guarda un nuevo elemento o lo actualiza en el map a través de otro elemento como identificador
    console.log("SET");
    console.log(String("#").repeat(80));
    segundoMapa.set("grupo", "Conejil");
    segundoMapa.set(1, { "direccion": "Tundra 158 Cda.14", "pais": "Mongolia" });
    segundoMapa.set("1", { "alimento": "alfalfa", "superalimento": "sobras" });
    segundoMapa.set({ "caterpillar": "oruguita" }, "ORUGAS!!!");
    segundoMapa.set({ "caterpillar": "oruguita" }, "ORGIAS!!!");
    segundoMapa.set({ "caterpillar": "oruguita" }, "ORGANO!!!");    //! TOMAR EN CUENTA QUE LOS OBJETOS USAN SUS REFERENCIAS COMO LLAVES
    segundoMapa.set(objeto, "EquisDE");

    console.log(segundoMapa);

    //* NÓTESE QUE LAS LLAVES DE UN MAP PODRÍAN SER CUALQUIER COSA, INCLUSO UN OBJETO


    console.log("\n");
    //? get(): este método obtiene un valor del map a partir de su llave (key)
    console.log("GET");
    console.log(String("#").repeat(80));
    console.log(segundoMapa.get("grupo"));
    console.log(segundoMapa.get("equis"));
    console.log(segundoMapa.get(1));
    console.log(segundoMapa.get("1"));
    console.log(segundoMapa.get({ "caterpillar": "oruguita" }));    //! ESTE OBJETO ORUGA, APUNTA HACIA OTRO ESPACIO EN LA MEMORIA, POR LO QUE SU VALOR ES NULO
    console.log(segundoMapa.get(objeto));                           //! SIN EMBARGO, ESTE OBJETO TIENE UNA REFERENCIA FIJA, POR LO QUE SÍ SE RETORNA VALOR


    console.log("\n");
    //? has(): este método verifica si el MAP tiene un valor a través de su llave.
    console.log("HAS");
    console.log(String("#").repeat(80));
    console.log(segundoMapa.has("grupo"));
    console.log(segundoMapa.has("equis"));
    console.log(segundoMapa.has(1));
    console.log(segundoMapa.has("1"));
    console.log(segundoMapa.has({ "caterpillar": "oruguita" }));
    console.log(segundoMapa.has(objeto));


    console.log("\n");
    //? delete(): este método elimina los valores de un MAP a través de su llave. Retorna 'true' o 'false'.
    console.log("DELETE");
    console.log(String("#").repeat(80));
    console.log(segundoMapa.delete("grupo"));
    console.log(segundoMapa.delete("equis"));
    console.log(segundoMapa.delete({ "caterpillar": "oruguita" }));
    console.log(segundoMapa.delete(objeto));

    console.log(segundoMapa);


    console.log("\n");
    //? keys(): muestra todas las llaves presentes en el MAP
    console.log("KEYS");
    console.log(String("#").repeat(80));
    console.log(segundoMapa.keys());


    console.log("\n");
    //? clear(): este método elimina todos los valores de un map.
    console.log("CLEAR");
    console.log(String("#").repeat(80));
    segundoMapa.clear();

    console.log(segundoMapa);

//#endregion MÉTODOS COMUNES

