# data-structure-js

course of platzi for data structure in javascript

## Introduccion

### Que es una estructura de datos?

Las estructuras de datos son colecciones de valores, que nos permite de una forma en particular organizar los datos para que puedan ser utilizados eficientemente.

### Como se guardan los datos?

para guardar la informacion tenemos los Memory Slot, que corresponde a pequenos espacios en la memoria donde se guarda la informacion de nuestras constantes en nuestro lenguaje de programacion (la forma de guardar la informacion es en binario y ocurre de forma aleatoria), para recordar el valor de nuestro valor, se guarda una address en valor hexadecimal y a traves de ella la computadora accede a ese valor guardado en memoria.

### Arrays  y string

En javaScript los array que creamos por defecto son dinamicos, es decir javascript nos permite muitar el array que creamos para elegir guarar mas informacion en el mismo, javascript cuando llegamos al limite de la longitud del array creado, va al memory slot y copia la informacion del array, busca un espacio en memoria donde pueda guardar la informacion con la nueva longitud asignada.

Construi un archivo en el repositorio donde se muestra como podemos construir un array desde una clase

[clase de arrays](./src/array/array.js)

Podemos acceder a la informacion de un string como si fuera un array, mas sin embargo estos son inmutables.

### Hash Tables

los hash tables en javascript son muy similares a un Objeto, ya que manejan el conceptoo de key value, a diferencia de un hash table posee una hash function (se encarga de asignar un hash a partir de el key que pasemos).

ventajas frente a un array es que podemos acceder a la informacion de forma mas rapida y manejar mejor el memory slot.

Ahora bien podemos tener colisiones en los hash table, es decir, podemos tener dos key que se les asigne el mismo hash, lo ideal seria tener por hash un maximo de dos valores. poseen tres metodos que serian *insert*, *search* y *delete*.
