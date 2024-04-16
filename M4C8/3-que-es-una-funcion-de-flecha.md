---
cover: >-
  https://images.unsplash.com/photo-1585166059782-f28143545183?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw2fHxtYWNoaW5lfGVufDB8fHx8MTcxMzI0NTU5Nnww&ixlib=rb-4.0.3&q=85
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

# ➡️ ¿Qué es una función de flecha?

### Las funciones en JavaScript

Las funciones aportan versatilidad a nuestro código, permitiéndonos básicamente añadir valores de entrada, trabajar con ellos y obtener valores de salida. Son bloques de código que operan como una especie de máquinas: realizan determinados trabajos y podemos utilizarlos siempre que nos haga falta.

Hasta 2015, las únicas formas de escribir funciones en JavaScript eran mediante una declaración de función o una expresión de función.

Usamos las declaraciones de función cuando queremos que la función sea global y esté disponible en todo el código. Estas no deben escribirse entre bloques de código (por ejemplo, entre condicionales).



### Declaración de función

#### Sintaxis

Las declaraciones de función se escriben en tres partes:

* 1: la palabra clave `function`
* 2: el `nombre` de la función seguido de paréntesis `()`
* 3: llaves `{}` donde se incluye la acción que lleva a cabo la función

```javascript
function nombre() {
    acción;
}
```

Para ejecutar una función, escribimos su `nombre` seguido de paréntesis `()`.

```javascript
nombre();
```

#### Ejemplo

```javascript
hiThere(); // Hi there

function hiThere() {
    console.log('Hi there');
}
```

#### Características de una declaración de función

* Debe tener un nombre
* No necesita estar asignada a una variable
* Se ejecuta antes que cualquier otro código.
* Se puede acceder a la función dentro de la declaración de función **antes** y después de definir la función



### Expresión de función

Una expresión de función se escribe igual que una declaración de función, salvo que se asigna a una variable y lleva un punto y coma `;` tras la llave de cierre. Las expresiones de función pueden no tener nombre; de hecho, también se denominan funciones anónimas.

#### Características de una expresión de función

* No necesita tener un nombre
* Puede almacenarse en una variable
* Se carga y ejecuta cuando el intérprete alcanza la línea de código
* Se puede acceder a la función dentro de la declaración de función **solo** tras definir la función

#### Sintaxis

```javascript
let myVariable = function () {
    return acción;
};
```

#### Ejemplo

```javascript
let greeting = function () {
    return 'Hi there again';
};
```

Las expresiones de función nos sirven para limitar el alcance de las funciones, aligerando de funciones el ámbito global y manteniendo una sintaxis más clara. Estas son más adecuadas cuando necesitamos una función dentro de bloques de código.



<figure><img src="https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?crop=entropy&#x26;cs=srgb&#x26;fm=jpg&#x26;ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHwxfHxhcnJvd3xlbnwwfHx8fDE3MTMyNDgwNDF8MA&#x26;ixlib=rb-4.0.3&#x26;q=85" alt="" width="375"><figcaption></figcaption></figure>

### Función de flecha

Las funciones de flecha son funciones anónimas con una sintaxis muy concisa en comparación con las declaraciones y expresiones de función tradicionales.

Para escribirlas, simplemente necesitamos escribir una variable seguida del signo igual (`=`), unos paréntesis donde incluiremos la lista de argumentos `()`, una flecha con los símbolos igual y mayor que (`=>`) y, por último añadir la acción que llevará a cabo la función entre llaves `{}`, aunque, cuando solo se devuelve una acción, podemos prescindir de las llaves.

#### Sintaxis

```javascript
variable = () => {acción}
```

#### Ejemplo

```javascript
funcionFlecha = () => console.log("¡Soy una función de flecha!");
funcionFlecha(); // ¡Soy una función de flecha!
```

En comparación, un código equivalente con una expresión de función se escribiría así:

```javascript
let expresiónFunción = function () {
    console.log('¡Soy una expresión de función!');
};
expresiónFunción(); // ¡Soy una expresión de función!
```



### Funciones de flecha con un solo argumento

Cuando una función tiene solo un argumento, podemos omitir los paréntesis alrededor de la lista de argumentos.

```javascript
minúscula = cadena => console.log(cadena.toLowerCase());
minúscula('¡QUÉ RUIDO HACE AQUÍ!'); // "¡qué ruido hace aquí!"
```



### Funciones de flecha con varios argumentos

Es necesario usar paréntesis alrededor de la lista de argumentos en las funciones de flecha con varios argumentos.

```javascript
minus = (cadena, ciudad) => console.log(cadena.toLowerCase() + ciudad.toUpperCase());
minus('¡QUÉ FRÍO HACE EN ', 'helsinki!'); // "¡qué frío hace en HELSINKI!"
```

### Funciones de flecha que devuelven objetos

Como particularidad, cuando devolvemos un objeto con una función de flecha, debemos colocarlo entre paréntesis para que JavaScript lo detecte como objeto y no como una acción de la función:

```javascript
geografía = (país, ciudad) => ({país: país, ciudad: ciudad});
console.log(geografía('Noruega', 'Oslo'));
```

<figure><img src="https://images.unsplash.com/photo-1595452767427-0905ad9b036d?crop=entropy&#x26;cs=srgb&#x26;fm=jpg&#x26;ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHwzfHxxdWVzdGlvbnxlbnwwfHx8fDE3MTMyMDg3MTN8MA&#x26;ixlib=rb-4.0.3&#x26;q=85" alt="" width="188"><figcaption></figcaption></figure>

### Funciones de flecha con `this`

A diferencia de las declaraciones y expresiones de función, las funciones de flecha **no tienen su propio contexto** de `this`, sino que <mark style="background-color:purple;">lo heredan del elemento que las engloba</mark>. Esto nos permite sacarles partido en ocasiones donde las funciones tradicionales no operarían como esperamos.

#### Ejemplo con función tradicional

```javascript
function Usuario(nombre) {
    this.nombre = nombre,
    this.llamada = function () {
            console.log(this.nombre); // "Ariel"

      function funcionInterior() {
            console.log(this.nombre); // undefined
            console.log(this); // Window {}
        }

        funcionInterior();

    }
}

let ariel = new Usuario('Ariel');
ariel.llamada();
```

En el ejemplo anterior, podemos acceder a `this.nombre` dentro de la función `this.llamada()` porque es el método de un objeto. Ahora bien, no podemos acceder a `this.nombre` dentro de `funcion.Interior()`; en ese caso this hace referencia al objeto global, por lo que devuelve `undefined`. Veamos a continuación el mismo ejemplo ahora con una función de flecha.

#### Ejemplo con función de flecha

```javascript
function Usuario(nombre) {
    this.nombre = nombre,
    this.llamada = function () {
      console.log(this.nombre); // "Ariel"

      let funcionInterior = () => {
            console.log(this.nombre); // "Ariel"
        }

        funcionInterior();

    }
}

let ariel = new Usuario('Ariel');
ariel.llamada();
```

Aquí hemos empleado una función de flecha para `funcionInterior()`. En las funciones de flecha, this se hereda del elemento que las engloba. En este caso, de `this.llamada()`, por lo que sí nos devuelve el nombre Ariel en ambos casos.

### Limitaciones de las funciones de flecha

#### Conexión con argumentos

Las funciones tradicionales están ligadas a argumentos, por lo que podemos acceder a ellos mediante la palabra clave `arguments`.

```javascript
function func1(a, b, c) {
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  console.log(arguments[2]); // 3
}

func1(1, 2, 3);
```

Por contra, las funciones de flecha no disponen de esa funcionalidad:

```javascript
func1 = (a, b, c) => {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

func1(1, 2, 3); // ReferenceError: arguments is not defined 
```

Afortunadamente, podemos solventar este contratiempo empleando el operador de expansión en la lista de argumentos:

```javascript
func1 = (...argumentos) => {
  console.log(argumentos[0]); // 1
  console.log(argumentos[1]); // 2
  console.log(argumentos[2]); // 3
}

func1(1, 2, 3); 
```



#### Creación de métodos en objetos

No es posible crear métodos con ellas dentro de objetos.

```javascript
let Usuario = {
    nombre: 'Ariel',
    edad: 55,  
    diTunombre: () => {
      console.log(this.nombre);
    }
}
console.log(Usuario.nombre); // 'Ariel'
console.log(Usuario.edad); // 55
console.log(Usuario.diTunombre()); // undefined
```



#### Uso como constructores

No es posible emplearlas como constructores.

```javascript
let Usuario = (nombre, edad) => {
    this.nombre = nombre,
    this.edad = edad
}

let ariel = new Usuario('Ariel', 55); // TypeError: Usuario is not a constructor
```



### Vídeo de resumen



{% embed url="https://www.youtube.com/watch?v=NAN7U3MrX6o" %}

### Fuentes

[W3Schools ](https://www.w3schools.com/js/js\_arrow\_function.asp)| [mdn ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow\_functions)| [Programiz](https://www.programiz.com/javascript/arrow-function)
