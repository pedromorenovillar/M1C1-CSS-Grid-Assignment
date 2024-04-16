---
cover: >-
  https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw5fHxwYWNraW5nfGVufDB8fHx8MTcxMzI2MDg3MHww&ixlib=rb-4.0.3&q=85
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

# 🏗️ ¿Qué es la deconstrucción de variables?

La deconstrucción de variables es una herramienta que nos permite extraer los valores de una matriz o los atributos de un objeto y asignarlos a variables, entre otras cosas.

#### Sintaxis

La sintaxis empleada dependerá de si lo que estamos deconstruyendo es un objeto o una matriz. En el caso de un objeto, la llevaremos a cabo declarando una o varias variables con la palabra clave correspondiente (`let`, `const` o `var`) seguida de llaves `{}`, donde añadiremos el nombre de las variables. A continuación, escribiremos un signo igual (`=`) y, por último, el nombre del objeto los atributos. La sintaxis para extraer valores de una matriz es igual salvo que en lugar de unas llaves empleamos unos corchetes `[]`.&#x20;

```javascript
// Objeto

let {variables} = Nombre_del_objeto

// Matriz

let [variables] = Nombre_de_la_matriz
```



### Deconstrucción de un objeto

Antes de 2015, la única manera de asignar atributos de un objeto a variables era acceder individualmente a cada atributo:

#### Ejemplo

```javascript
const usuario = {
  nombre: 'Adrián',
  apellido: 'Rodríguez',
  nacionalidad: 'Colombiana'
}

// Asignación de atributos de objeto a variables:
let nombre = usuario.nombre;
let apellido = usuario.apellido;
let nacionalidad = usuario.nacionalidad;

console.log(nombre); // "Adrián"
console.log(apellido); // "Rodríguez"
console.log(nacionalidad); // "Colombiana"
```

En 2015 se introdujo la deconstrucción mediante asignación, que simplifica enormemente el código.

#### Ejemplo

```javascript
const usuario = {
  nombre: 'Adrián',
  apellido: 'Rodríguez',
  edad: 33,
}

// Deconstrucción mediante asignación
let {apellido, edad, nombre, nacionalidad = 'Española'} = usuario;

console.log(nombre); // "Adrián"
console.log(apellido); // "Rodríguez"
console.log(edad); // 33
console.log(nacionalidad); // "Española"
```

Al llevar a cabo la deconstrucción de objetos mediante asignación, hay que recordar tres cosas:

* El orden en el que escribamos las variables entre llaves no importa.
* Debemos emplear el mismo nombre que la clave del objeto.
* Para asignar un valor por defecto, añadimos `=` y el valor en las variables entre llaves.



### Deconstrucción de atributos como argumentos para funciones

Podemos emplear la deconstrucción mediante asignación para pasar atributos de un objeto como argumentos de una función. En este caso escribimos las variables entre corchetes dentro de los paréntesis de los argumentos.

#### Ejemplo

```javascript
const adrián = {
  nombre: 'Adrián',
  apellido: 'Rodríguez',
  edad: 33,
}

// Deconstrucción mediante asignación pasando atributos de objeto a una función
const mostrarUsuario = ({ nacionalidad = 'española', edad, nombre, apellido }) => {
  console.log(`
  ${nombre} ${apellido}, de nacionalidad ${nacionalidad} y ${edad} años.
  `);
}

mostrarUsuario(adrián);
// "Adrián Rodríguez, de nacionalidad española y 33 años."
```



### Deconstrucción de atributos anidados en un objeto

Para deconstruir atributos anidados dentro de un objeto empleamos llaves dentro de llaves.



```javascript
const usuario = {
  nombre: 'Adrián',
  apellidos: {
    primerApellido: 'Rodríguez',
    segundoApellido: 'Gómez',
  },
  edad: 33,
}

// Deconstrucción de atributos anidados en un objeto con {}
let {apellidos: {primerApellido, segundoApellido}, edad, nombre} = usuario;

console.log(nombre); // "Adrián"
console.log(primerApellido); // "Rodríguez"
console.log(segundoApellido); // "Gómez"
console.log(edad); // 33
```

### Deconstrucción de una matriz

Podemos deconstruir una matriz de un modo similar a un objeto, solo que empleando corchetes \[] en lugar de llaves {}.

#### Ejemplo

```javascript
const compra = ['kiwi', 'fanta', 'dentífrico', , 'espinacas', 'acelgas', 'borrajas'];

let [fruta, bebida, , snacks = 'pipas', ...verdura] = compra;

console.log(fruta); // "kiwi"
console.log(bebida); // "fanta"
console.log(snacks); // "pipas"
console.log(verdura); // ["espinacas","acelgas","borrajas"]
```

Al deconstruir una matriz debemos recordar lo siguiente:

* El orden en el que escribamos las variables reflejará los índices de la matriz (0 = `fruta` = `kiwi`).
* Podemos asignar valores predeterminados con `=` (ver `snacks` en el ejemplo y las `, ,` tras `dentífrico` en la matriz).
* Si usamos `, ,` en la lista de variables, se saltará esa asignación.
* Podemos combinar varios elementos en una variable. Para ello emplearemos el [operador de extensión](5-que-hace-el-operador-de-extension-en-javascript.md) (`...verdura` en el ejemplo). La variable contendrá una matriz. En este caso, el nombre tras los `...` no puede tener una coma detrás.



### Deconstrucción de una matriz anidada

Para deconstruir una matriz anidada empleamos corchetes dentro de corchetes.

#### Ejemplo

```javascript
const materiales = ['agua', 'madera', ['cobalto', 'níquel']];

const [a, b, [c, d]] = materiales;

console.log(a); // "agua"
console.log(b); // "madera"
console.log(c); // "cobalto"
console.log(d); // "níquel"
```



### Intercambio de variables

Para intercambiar los valores de dos variables, las escribimos en orden invertido y en corchetes a ambos lados del signo =.

#### Ejemplo

```javascript
let a = 1;
let b = 10;

// Intercambio de variables mediante asignación
[a, b] = [b, a];

console.log(a); // 10
console.log(b); // 1
```



### Vídeos de resumen

{% embed url="https://www.youtube.com/watch?v=UgEaJBz3bjY" %}

{% embed url="https://www.youtube.com/watch?v=UHZcJyVXtLo" %}

### Fuentes

[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring\_assignment) | [Programiz](https://www.programiz.com/javascript/destructuring-assignment) | [javascript.info](https://javascript.info/destructuring-assignment)
