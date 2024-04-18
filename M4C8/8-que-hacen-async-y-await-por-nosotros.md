---
cover: >-
  https://images.unsplash.com/photo-1581677641984-cf14ca58c5ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHwyfHx0cmFmZmljJTIwbGlnaHR8ZW58MHx8fHwxNzEzMzc1MjAxfDA&ixlib=rb-4.0.3&q=85
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

# ⏯️ ¿Qué hacen async y await por nosotros?

### ¿Para qué se usan async y await?

`async` y `await` son palabras clave que facilitan la escritura de promesas, permitiéndonos determinar el orden de ejecución de operaciones en base a la resolución de promesas. Emplearlas hace que nuestro código sea más fácil de leer que con devoluciones de función o una promesa al uso. Gracias a ellas también es más sencillo gestionar los errores de las promesas y solucionar los problemas en el código.

### async

`async` hace que una función **devuelva** una promesa. Al usar esta palabra clave delante de una función, indicamos a JavaScript que se trata de una función asíncrona y devuelve una promesa. Escribir `async` delante de una función nos permite usar `await` dentro de ella.

#### Sintaxis

Escribimos `async` delante del nombre de una función y la palabra clave `function`.

```javascript
async function nombre() {acción}
```

**Ejemplos**

```javascript
async function funciónAsíncrona() {
  console.log('Soy una función asíncrona')
  return Promise.resolve('Resultado de la función asíncrona');
}
funciónAsíncrona(); // Soy una función asíncrona
```

`funciónAsíncrona` devuelve una promesa, por lo que podemos emplear el método `then()`.

```javascript
async function funciónAsíncrona() {
  console.log('Soy una función asíncrona')
  return Promise.resolve('Resultado de la función asíncrona');
}
funciónAsíncrona().then(function(resultado){
  console.log(resultado)
});

// Soy una función asíncrona
// Resultado de la función asíncrona
```

En el ejemplo de arriba obtenemos tanto el texto principal de la función como el mensaje de resolución de la promesa, este último mediante el método `then`.

### await

`await` hace que una función **espere** una promesa. Se escribe **dentro** de una función `async` para que esta espere al resultado de una operación asíncrona.

#### Sintaxis

Escribimos `await` delante del nombre de una promesa.

```javascript
resultado = await promesa
```

**Ejemplo**

En el siguiente ejemplo creamos una variable, `promesaInicial`, a la que asignamos una promesa que tarda 3 segundos en resolverse (por medio de la función setTimeout) y devuelve un mensaje.

A continuación escribimos una función asíncrona añadiendo la palabra clave `async` delante del nombre de la función. Después, vinculamos ambas funciones creando la variable `resultadoInicial` y asignándola a la `promesaInicial` mediante el signo igual (`=`) y la palabra clave `await`. Por último, imprimimos en la consola el resultado de `promesaInicial` y el mensaje de la funciónAsíncrona.

```javascript
let promesaInicial = new Promise(function(resolve, reject){
  setTimeout(function (){
    resolve('Promesa inicial resuelta')}, 2000);
});

async function funciónAsíncrona() {
  
  let resultadoInicial = await promesaInicial;
  console.log(resultadoInicial)
  console.log('Soy una función asíncrona que ha esperado una promesa')
  return Promise.resolve('Resultado de la función asíncrona');
}
funciónAsíncrona();
// Promesa inicial resuelta
// Soy una función asíncrona que ha esperado una promesa
```

<figure><img src=".gitbook/assets/async_await (1).svg" alt=""><figcaption></figcaption></figure>

### Gestión de errores

Usamos `try/catch` para gestionar los errores dentro de una función asíncrona. En el siguiente ejemplo, añadimos la variable `tester` para simular el estado reject en `promesaInicial`. A continuación añadimos los bloques `try {}` para la resolución de la promesa y `catch {}` para la resolución de errores.&#x20;

#### Ejemplo

```javascript
let promesaInicial = new Promise(function(resolve, reject){
  const tester = false;
  if (tester === true) {
  setTimeout(function (){
    resolve('Promesa inicial resuelta')}, 2000);
  } else {
    reject('No se ha podido resolver la promesa');
  }
});

async function funciónAsíncrona() {
  
  try {
    let resultadoInicial = await promesaInicial;
    console.log(resultadoInicial)
    console.log('Soy una función asíncrona que ha esperado una promesa')
    return Promise.resolve('Resultado de la función asíncrona');
  }
  catch(error){
    console.error(error);
  }
}
funciónAsíncrona(); // No se ha podido resolver la promesa
```

### Operaciones asíncronas mostradas de forma síncrona

Podemos combinar async/await con varias promesas para organizar el orden de ejecución de los procesos asíncronos. Esto nos permite controlar los procesos asíncronos y mostrarlos de una forma síncrona.

Recuperemos los ejemplos de tareas domésticas empleados anteriormente:

```javascript
const lavadoraPuesta = true;
const panComprado = true;
const comidaPreparada = true;

function ponerLavadora () {
  return new Promise(function(resolve, reject) {
  if (lavadoraPuesta === true) {
    resolve('¡Ropa lavada!');
  } else {
    reject('No has lavado la ropa...');
  }
})
};

function comprarPan () {
  return new Promise(function(resolve, reject) {
  if (panComprado === true) {
    resolve('¡Pan comprado!');
  } else {
    reject('No has comprado el pan...');
  }
})
};

function prepararComida () {
  return new Promise(function(resolve, reject) {
  if (comidaPreparada === true) {
    resolve('¡Comida hecha!');
  } else {
    reject('No has preparado la comida...');
  }
})
};
```

Podemos crear una nueva función que combine estas tres y nos muestre todos los resultados en el orden que deseemos y prescindiendo del método `then`.

```javascript
async function tareasDomésticas () {
  const ropaLavada = await ponerLavadora();
  console.log(ropaLavada);
  
  const comidaPreparada = await prepararComida();
  console.log(comidaPreparada);
  
  const panComprado = await comprarPan();
  console.log(panComprado);
  
}
tareasDomésticas();
```

### Gestión de errores con varias funciones

Es recumendable utilizar un bloque try-catch por cada promesa que englobemos.

Proporciona más información sobre qué función causó el error, lo que puede ser útil para el diagnóstico. Esta opción es la más extendida en la industria, y nos sirve cuando necesitamos uno de los tres procesos aunque falle otro.

```javascript
async function tareasDomésticas () {
  try {
      const ropaLavada = await ponerLavadora();
      console.log(ropaLavada);
      } catch(error) {
        console.log(error)
      }
  
  try {
      const comidaPreparada = await prepararComida();
      console.log(comidaPreparada);
      } catch(error) {
        console.log(error)
      }
  
  try {
      const panComprado = await comprarPan();
      console.log(panComprado);
      } catch(error) {
        console.log(error)
      }  
}
tareasDomésticas();
```

El código completo de las tareas domésticas y la función async [está aquí](sample\_code\_files/async\_tareas\_dom%C3%A9sticas.js).

### Vídeo de resumen

{% embed url="https://www.youtube.com/watch?v=9j1dZwFEJ-c" %}

### Fuentes

[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async\_function) | [W3Schools](https://www.w3schools.com/js/js\_async.asp) | [Programiz](https://www.programiz.com/javascript/async-await) | [Javascript.info](https://javascript.info/async-await)
