# MONGODB

MongoDB es un sistema de base de datos no relacional, o como se dice abreviado, NoSQL. A diferencia de las bases de datos relacionales, **estas bases de datos utilizan documentos similares al formato JSON el cual es llamado BSON** (Binary JSON). Gracias a esta forma de trabajo, se puede cambiar la estructura de los "registros" **(pero oficialmente son llamados documentos)** sin dificultad alguna.

En este tipo de bases de datos se puede almacenar la información mediante colecciones. Cada colección puede tener un número indefinido de documentos.

Para poder gestionar las bases de datos en MongoDB es necesario utilizar la aplicación "mongosh". Esta aplicación es la shell de MongoDB. Obviamente es una terminal donde únicamente se pueden ingresar comandos. Sin embargo, existen alternativas gráficas para la gestión de bases de datos MongoDB. Por ejemplo:

- MongoDB Compass
- Extensiones de VSCode
- Studio 3T
- DBeaver
- MongoDB Atlas **(en la nube)**

Sin embargo, en este caso, para fines de aprendizaje, nos valdremos únicamente de comandos, salvo el caso de que una tarea sea demasiado compleja, utilizaremos **MongoDB Compass**.

<br>


## TIPOS DE DATOS

Existen diversos tipos de datos a incluir en el mongoDB. Por ejemplo, están los comunes como las cadenas, números y booleanos. Sin embargo, al igual como en otras bases de datos, existen otros tipos de datos como las fechas, UUID, entre otros.

### FECHAS

Por ejemplo, para insertar fechas en un documento se realiza de la siguiente manera:
```cpp
db.<nombre_de_la_coleccion>.insertOne({
    ...,
    "fec_documento": ISODate("2025-07-22T00:00:00Z")
})
```

Sin embargo, al editar un documento en el MongoDB Compass, es necesario incluir las fechas de esta forma:
```cpp
{
  ...,
  "fec_documento": { "$date": "2025-07-22T00:00:00Z" }
}
```


<br>

## COMANDOS
Se pueden aplicar diversos comandos, ya sea para cambiar el comportamiento de la consola, así como para poder gestionar bases de datos, coleciones y documentos.



### MONGOSH

```javascript
cls
```
Limpia la consola del mongosh.

<br>



### BASE DE DATOS

```cpp
show dbs
```
Lista las bases de datos.
___
```cpp
db
```
Muestra el nombre de la base de datos en uso.
___
```cpp
use <nombre_base_de_datos>
```
Se crea una base de datos de forma temporal si esta aún no existe y la cambia en caso suceda lo contrario. La base de datos no se mostrará en el listado si esta no tiene al menos una colección.
___
```cpp
db.dropDatabase()
```
Elimina la base de datos en uso.

<br>



### COLECCIONES

```cpp
show collections
```
Lista todas las colecciones disponibles en la base de datos.
___

```cpp
db.createCollection('<nombre_de_la_coleccion>')
```
Crea una colección dentro de la base de datos.
___

```cpp
db.<nombre_de_la_coleccion>.drop()
```
Elimina la colección indicada.



<br>



### DOCUMENTOS

```cpp
db.<nombre_de_la_coleccion>.find(criterios, mapeado)
```
Lista todos los documentos de la colección indicada.
> **criterios:** se pueden incluir propiedades, por ejemplo: `{"txt_nombre": "Chris"}`, esto buscara todos los objetos que tengan el atributo "txt_nombre" igual a "Chris".
> Sin embargo, también se pueden incluir operadores como los siguientes:
> - **$eq:** define igualdad. `{ "num_paginas": { $eq: 500 } }`
> - **$ne:** define desigualdad. `{ "txt_idioma": { $ne: "Español" } }`
> - **$gt:** define que los valores sean mayores. `{ "num_paginas": { $gt: 576 } }`
> - **$gte:** define que los valores sean mayores o iguales. `{ "num_paginas": { $gte: 576 } }`
> - **$lt:** define que los valores sean menores. `{ "num_paginas": { $lt: 112 } }`
> - **$lte:** define que los valores sean menores o iguales. `{ "num_paginas": { $lte: 112 } }`

> **mapeado:** especifica los atributos que se retornarán de los documentos, es decir, de N atributos en un documentos, en el listado solo se devolverán los atributos incluídos en el mapeado, incluído el *"_id"*. Por ejemplo `{"txt_nombre": 1}` nos devolverá únicamente el **_id** y el atributo **txt_nombre**.
> - **$slice:** este valor define qué porción de un arreglo se mostrará. `{ "lst_autores": { $slice: 1 } }` Este código solo mostrará el primer elemento del arreglo "lst_autores".

> **skip(N):** omite en el listado los primeros N documentos.

> **limit(N):** muestra únicamente los siguientes N documentos del listado. Se podría tomar como el tamaño del paginado.
___

```cpp
db.<nombre_de_la_coleccion>.insertOne(<JSON_del_documento>)
```
Lista todos los documentos de la colección indicada.

