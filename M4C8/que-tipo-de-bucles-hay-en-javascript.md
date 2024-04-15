---
cover: >-
  https://images.unsplash.com/photo-1633614907351-22b3992b906c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw3fHxsb29wfGVufDB8fHx8MTcxMjkyMDA4N3ww&ixlib=rb-4.0.3&q=85
coverY: 0
layout:
  cover:
    visible: true
    size: full
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---
# ➿ ¿Qué tipo de bucles hay en JavaScript?

### En qué consisten los bucles

Los bucles en programación son estructuras de control que nos permiten **repetir una acción varias veces si se cumple una condición**.





<figure><img src="../.gitbook/assets/bucle_sencillo (3).png" alt=""><figcaption><p>Diagrama básico de un bucle</p></figcaption></figure>





Un ejemplo sencillo de la vida real: imaginemos que nos hemos quedado sin manzanas y vamos al la frutería. Tenemos la cesta de la compra en una mano necesitamos comprar 6 manzanas. Emplearíamos un bucle, es decir, una acción repetida varias veces hasta tener en la cesta el número de manzanas que necesitamos.

**Acción**: añadir una manzana a la cesta

**Condición**: hasta que haya 6 manzanas





<figure><img src="../.gitbook/assets/bucle_manzanas (3).png" alt=""><figcaption><p>Diagrama del bucle de ejemplo</p></figcaption></figure>



### Tipos de bucles

Hay distintos tipos de bucles en JavaScript, aunque todos hacen básicamente lo mismo: repetir una acción un número de veces. Los diversos tipos de bucles ofrecen la posibilidad de establecer el inicio y el final del bucle, por lo que unos son más adecuados para determinadas situaciones que otros.

### Bucle for tradicional

El bucle for repite una acción hasta que una determinada <mark style="background-color:purple;">condición sea falsa</mark>. Para utilizarlo, escribimos la palabra clave `for` seguida de unos paréntesis donde colocamos tres elementos separados por punto y coma: una expresión de inicialización, una condición y una añadidura. Por último, añadimos entre corchetes la acción que se ejecutará si la condición es verdadera.

**Sintaxis**

```javascript
for (inicialización; condición; añadidura)
    {acción}
```

Al ejecutarse un bucle for, se dan los siguientes pasos:

1. Se ejecuta la expresión de inicialización. Normalmente, con ella se inicializan los contadores del bucle. Esta expresión permite declarar variables.
2. Se evalúa la condición. Si esta es verdadera, se ejecuta la acción. Si es falsa, se detiene el bucle. En los casos donde se omite la condición, esta se considera verdadera.
3. Se ejecuta la acción. En caso de necesitar ejecutar varias acciones, hay que crear un bloque con ellas, es decir, ponerlas entre paréntesis `({ })`.
4. En caso de existir, se ejecuta la añadidura, que es una expresión que habitualmente actualiza el contador del bucle o la condición.
5. Se repite el bucle empezando desde el punto 2.



**Ejemplo 1**

```javascript
var manzanas = 0;

for (var i = 0; i < 6; i++) {
  manzanas += 1;
  
}

console.log(manzanas) // 6
```

Este bucle for tradicional refleja el ejemplo inicial de las manzanas. El código sigue estos pasos:

1. Se ejecuta la expresión de inicialización, asignando a la variable `i` (un contador) un valor inicial de 0.
2. Se evalúa la condición. Si el contador `i` es inferior a 6, se ejecuta la acción. Si el contador es igual a 6, se detiene el bucle.
3. Se ejecuta la acción, añadiendo 1 a la variable manzanas, que hemos definido asignándole un valor de 0 antes del bucle.
4. Se ejecuta la añadidura, que actualiza el contador `i` sumándole 1 mediante un [operador de incremento](https://keepcoding.io/blog/operador-de-incremento-en-javascript/#Uso\_como\_sufijo\_x).
5. Se repite el bucle empezando desde el punto 2.



Ejemplo 2

```javascript
var jugadores = ['Jordan','Pippen','Rodman','Kerr'];
for (i = 0; i < jugadores.length; i++) {
  console.log(jugadores[i])
}

/* Resultado:
"Jordan"
"Pippen"
"Rodman"
"Kerr"
*/
```

En este caso usamos un bucle for en una matriz para obtener los nombres de los jugadores del equipo.&#x20;

### Bucle for in

El bucle for in sirve para iterar con una variable determinada por <mark style="background-color:purple;">todas las propiedades de un objeto</mark>, ejecutando la acción establecida para cada propiedad. Es particularmente útil para iterar sobre los valores de los objetos que recibimos como respuestas de servidores y APIs.

Para utilizarlo, escribimos la palabra clave `for` seguida de unos paréntesis donde colocamos tres elementos: una variable que representa la propiedad por la que iterar en el objeto, la palabra clave `in` y una variable que representa al objeto. Por último, añadimos entre corchetes la acción que se ejecutará si la condición es verdadera.



**Sintaxis**

```javascript
for (clave in objeto)
    {acción}
```

**Ejemplo 1**

<pre class="language-javascript"><code class="lang-javascript">let usuario = {
  nombre: "Paco",
  edad: 30,
  provincia: 'Albacete'
};

for (var clave in usuario) {
  console.log(clave + ": " + usuario[clave])
}

/* Resultado:
"nombre: Paco"
<strong>"edad: 30"
</strong>"provincia: Albacete"
*/
</code></pre>

El ejemplo de arriba devuelve las claves y los valores correspondientes a cada propiedad del objeto `usuario`.



Ejemplo 2

```javascript
var jugadores = ['Jordan','Pippen','Rodman','Kerr'];
for (var jugador in jugadores) {
  console.log(jugadores[jugador]);
}
/* Resultado:
"Jordan"
"Pippen"
"Rodman"
"Kerr"
*/
```

En este caso usamos un bucle for in en una matriz para obtener los nombres de los jugadores del equipo. Cabe destacar tres cosas:

1. Como convención, si una matriz sobre la que aplicamos un bucle está en plural (jugadores), utilizamos en el bucle el mismo nombre en singular como variable iteradora (jugador).
2. En este caso, la variable `jugador` es el índice de la matriz.
3. Como el bucle for in en este caso itera por propiedades definidas por el usuario, es [recomendable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops\_and\_iteration#arrays) no utilizar un bucle for in para una matriz y usar en su lugar un [bucle for tradicional](./#bucle-for-tradicional).



### Bucle do while

Este bucle se repite hasta que una determinada <mark style="background-color:purple;">condición sea falsa, ejecutándose al menos una vez</mark> puesto que la acción se sitúa **antes** de la evaluación de la condición. Para escribirlo, empleamos la palabra clave `do` seguida de la acción entre llaves. A continuación, añadimos la palabra clave `while` y, por último, la condición entre paréntesis.

#### Sintaxis

```javascript
do
    {acción}
while (condición);
```



Ejemplo

```javascript
var ahorros = 450;
do {
    ahorros += 100;
    console.log('Ahorros: ', ahorros);
} while (ahorros < 500)

// Resultado: 550
```

El ejemplo superior añade 100 a la variable ahorros cada vez que se ejecuta el bucle, siempre y cuando la variable sea inferior a 500.



### Bucle while

Un bucle while ejecuta una acción si una determinada <mark style="background-color:purple;">condición es verdadera</mark>.

Los bucles `while` deben tener la variable iteradora fuera del bucle. Sin variable iteradora, continuarían eternamente, por lo que es **importante** incluirla y aumentarla debidamente.

Para utilizar un bucle while escribimos la variable iteradora y después añadimos la palabra clave `while` seguida de la condición entre paréntesis y, por último, la acción.

#### Sintaxis

```javascript
var variableIteradora;
while (condición)
    {acción}
```

```javascript
var jugadores = ['Jordan','Pippen','Rodman','Kerr'];
var i = 0;
while (i < jugadores.length) {
  console.log(jugadores[i]);
  i++;
}

/*Resultado:
"Jordan"
"Pippen"
"Rodman"
"Kerr"
*/
```

En el ejemplo de arriba, el bucle while muestra en cada pase a un jugador de la lista de jugadores y aumenta la variable iteradora en 1 con un operador de incremento siempre y cuando la variable iteradora no sea mayor que el número total de los elementos en la lista de jugadores.

### Bucle for of

Este bucle se emplea para recorrer objetos iterables, como una matriz, con acciones que se ejecutan para el valor de cada propiedad del objeto. Para utilizarlo escribimos la palabra clave `for` seguida de paréntesis donde colocamos una variable iteradora que representa las propiedades del objeto seguida de la palabra clave `of` y del nombre del objeto. Por último, añadimos entre llaves la acción que queremos realizar sobre los valores.

**Sintaxis**

```javascript
for (variable of objeto)
    {acción}
```

**Ejemplo**

```javascript
var jugadores = ['Jordan','Pippen','Rodman','Kerr', 'Kukoc'];
for (jugador of jugadores) {
  console.log(jugador)
}

/*Resultado:
"Jordan"
"Pippen"
"Rodman"
"Kerr"
"Kukoc"
*/
```

En el ejemplo de arriba el bucle for of recorre la matriz jugadores y devuelve los valores de sus propiedades. Cabe destacar que el bucle for in devolvería los nombre de las propiedades (los índices en este caso), como ilustramos en el siguiente ejemplo:

```javascript
var jugadores = ['Jordan','Pippen','Rodman','Kerr', 'Kukoc'];
for (jugador in jugadores) {
  console.log(jugador)
}

/*Resultado:
"0"
"1"
"2"
"3"
"4"
*/
```





### Declaración break

Empleamos la palabra clave `break` para terminar un bucle o una declaración switch.

#### Ejemplo

```javascript
var jugadores = ['Jordan','Pippen','Rodman','Kerr', 'Kukoc'];
for (i = 0; i < jugadores.length; i++) {
  if (jugadores[i] === 'Rodman') {
    break;
  }
  console.log(jugadores[i])
}

/*Resultado:
"Jordan"
"Pippen"
*/
```

En el ejemplo de arriba la palabra clave `break` termina el bucle al encontrar a Rodman, mostrando solo los dos primeros jugadores de la lista.



### Declaración continue



Podemos usar la palabra clave `continue` para interrumpir una iteración del bucle si se da una condición y continuar con la siguiente iteración.

Podríamos decir que `break` salta hacia fuera del bucle y `continue` hacia adentro.

Ejemplo

```javascript
var jugadores = ['Jordan','Pippen','Rodman','Kerr', 'Kukoc'];
for (i = 0; i < jugadores.length; i++) {
  if (jugadores[i] === 'Rodman') {
    continue;
  }
  console.log(jugadores[i])
}

/*Resultado:
"Jordan"
"Pippen"
"Kerr"
"Kukoc"
*/
```

En el ejemplo de arriba la palabra clave `continue` interrumpe el bucle al encontrar a Rodman, **continuando con el bucle** hasta mostrar a todos los jugadores de la lista salvo a Rodman.



### Bucle forEach

El método de matrices `forEach()` ejecuta una función en cada elemento que no esté vacío en una matriz. Para emplearlo, escribimos el nombre de la matriz seguido de un punto, la palabra clave `forEach` y unos paréntesis donde añadiremos la función que deberá ejecutarse, seguida de una variable para el elemento actual entre paréntesis y la acción entre llaves.

**Sintaxis**

```javascript
matriz.forEach(función(elemento) {acción})
```

**Ejemplo 1**

```javascript
var jugadores = ['Jordan','Pippen','Rodman','Kerr', 'Kukoc'];
jugadores.forEach(function(jugador){
  console.log(jugador);
});
```

El ejemplo de arriba utiliza el método `forEach` en la matriz jugadores para mostrar en la consola el nombre de cada jugador.

**Ejemplo 2**

```javascript
const números = [1, 2, 3, 4]
const númerosTriples = []

números.forEach(function(número) {
  númerosTriples.push(número * 3)
})

console.log(númerosTriples) // [3,6,9,12]
```

En el ejemplo de arriba, se usa el método `forEach` para multiplicar por tres las cifras de la matriz `números` y añadirlas a la matriz `númerosTriples`.





### Vídeo de resumen explicativo

{% embed url="https://www.youtube.com/watch?v=Kn06785pkJg" %}
Introducción a los bucles (en inglés)
{% endembed %}



### Fuentes

[mdn-loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops\_and\_iteration)  | [W3Schools](https://www.w3schools.com/jsref/jsref\_foreach.asp) | [freecodecamp](https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/)
