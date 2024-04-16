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

Las funciones aportan versatilidad a nuestro código, permitiéndonos básicamente añadir valores de entrada, trabajar con ellos y obtener valores de salida. Son bloques de código que funcionan como una especie de máquinas que realizan determinadas operaciones y que podemos utilizar siempre que nos haga falta.

Hasta 2015, las únicas formas de escribir funciones en JavaScript eran mediante una declaración de función o una expresión de función.

### Declaración de función en JavaScript

### Sintaxis
Las declaraciones de función se escriben en tres partes:
 - 1: la palabra clave `function`
 - 2: el `nombre` de la función seguido de paréntesis `()`
 - 3: llaves `{}` donde se incluye la acción que lleva a cabo la función


```javascript
function nombre() {
    acción;
}
```
Para ejecutar una función, escribimos su `nombre` seguido de paréntesis `()`.
```javascript
nombre();
```
### Ejemplo
```javascript
hiThere(); // Hi there

function hiThere() {
    console.log('Hi there');
}
```
### Características de una declaración de función
- Debe tener un nombre
- No necesita estar asignada a una variable
- Se ejecuta antes que cualquier otro código.
- Se puede acceder a la función dentro de la declaración de función **antes** y después de definir la función

## Expresión de función

Una expresión de función se escribe igual que una declaración de función, salvo que se asigna a una variable y lleva un punto y coma `;` tras la llave de cierre.
Las expresiones de función pueden no tener nombre; de hecho, también se denominan funciones anónimas.

### Características de una expresión de función

- No necesita tener un nombre
- Puede almacenarse en una variable
- Se carga y ejecuta cuando el intérprete alcanza la línea de código
- Se puede acceder a la función dentro de la declaración de función **solo** tras definir la función

### Sintaxis
```javascript
var myVariable = function () {
    return acción;
};
``` 
### Ejemplo
```javascript
var greeting = function () {
    return 'Hi there again';
};
```
### Diferencia
Usamos las declaraciones de función cuando queremos que la función sea global y esté disponible en todo el código. Estas no deben escribirse entre bloques de código (por ejemplo, entre condicionales).

Por otro lado, las expresiones de función nos sirven para limitar el alcance de las funciones, aligerando de funciones el ámbito global y manteniendo una sintaxis más clara. Estas son más adecuadas cuando necesitamos una función dentro de bloques de código.

### Función de flecha

Las funciones de flecha tienen una sintaxis concisa en comparación con las declaraciones de funciones tradicionales.

#### Sintaxis

```
variable = () => {acción}
```

```javascript
helloWorld = () => { console.log("¡Hola mundo!"); }
helloWorld();
```

### Funciones de flecha con un solo argumento

Cuando una función tiene solo un argumento, puedes omitir los paréntesis alrededor de la lista de argumentos.

```javascript
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');
```

### Funciones de flecha con varios argumentos

Es necesario usar paréntesis alrededor de la lista de argumentos en las funciones de flecha con varios argumentos.

```javascript
fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
fullName('Kristine', 'Hudgens');
```

### Funciones de flecha con this

#### Creación de un objeto y métodos

(Las funciones son objetos en JS.)

* Creamos un objeto llamado `Invoice` que tiene un método `total`.
* Definimos el método `total` usando `setInterval` para realizar una acción periódica.

```javascript
function Invoice(subTotal) {
    this.taxRate = 0.06;
    this.subtotal = subTotal;
    this.total = setInterval(function totalNumbers() {
    console.log((this.taxRate * this.subTotal) + this.subTotal);
  }, 2000);
}

const inv = new Invoice(200);
inv.total();
```

#### Interacción con this

* Dentro de `setInterval`, `this` no funciona como se espera en las funciones regulares debido a cómo se manejan los ámbitos en JavaScript. `setInterval` es un método del **elemento Window**, por lo que utilizar `this` en él hará referencia a Window, no a la función Invoice.
* Convertir la función a una función de flecha soluciona este problema, ya que las funciones de flecha no tienen su propio contexto de `this`, sino que lo hereda del elemento que las engloba (Invoide en este caso).
* El uso de funciones de flecha en este escenario evita la pérdida de contexto de `this`, lo que permite un acceso adecuado a las propiedades del objeto `Invoice`.

```javascript
function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;

  this.total = setInterval(() => {
    console.log((this.taxRate * this.subTotal) + this.subTotal);
  }, 2000);
}
```
