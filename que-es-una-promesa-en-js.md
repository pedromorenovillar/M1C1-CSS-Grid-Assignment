# 🤞 ¿Qué es una promesa en JS?

Las promesas se utilizan para gestionar operaciones asíncronas en JavaScript, como las llamadas a APIs externas. Por ejemplo, al llamar a la API de Twitter para obtener publicaciones, es posible que deseemos gestionar tanto la respuesta correcta como la de error de manera adecuada.

Las promesas son una parte esencial de la programación moderna en JavaScript, especialmente en el desarrollo de aplicaciones web que interactúan con servicios externos. Dominar su uso es fundamental para garantizar una experiencia de usuario fluida y robusta.

#### Sintaxis

Para crear una promesa, se utilizan las palabras clave `new Promise`, y, por convención, `resolve` y `reject` para ambos escenarios de respuesta.

```javascript
nombre = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(acción)
  }, timeInmilliseconds);

  setTimeout(() => {
    reject(acción)
  }, timeInmilliseconds);
});
```

Llamada a una promesa: se utilizan las palabras clave `then` y `data` (para el resultado de `resolve`) y `catch` y `err` (para el resultado de `reject`).

```javascript
nombre
  .then(data =>{
    acción;
  })
  .catch(err =>{
    acción;
  });
```

#### Ejemplo

En este ejemplo, `sleepyGreeting` es una promesa que simula una operación asíncrona. Se resuelve con éxito después de dos segundos, devolviendo el saludo '¡Hola!', o se rechaza con un error '¡Demasiado cansado!' después del mismo tiempo. Se utilizan los métodos `.then()` y `.catch()` para manejar las respuestas correctas y los errores.

```javascript
let sleepyGreeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('¡Hola!')
  }, 2000);

  setTimeout(() => {
    reject(Error('¡Demasiado cansado!'))
  }, 2000);
});

sleepyGreeting
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
```

### Cómo usar promesas fetch para comunicarse con APIs externas en JavaScript

1. Configuración de la promesa `fetch`

* Utiliza la función fetch para hacer una llamada a la API.
* Almacena la promesa en una variable, como `peoplePromise`.

```javascript
const peoplePromise = fetch('https://swapi.dev/api/people/');
```

2. Manipulación de las respuestas de la promesa

* Usa declaraciones console.log para rastrear el orden de ejecución de la promesa.
* Importante: fetch devuelve una promesa.
* Manipula la respuesta de la promesa usando `.then()` y `.catch()`.

```javascript
console.log('Starting fetch call');
const peoplePromise = fetch('https://swapi.dev/api/people/');
console.log('After fetch call');
console.log(peoplePromise);
console.log('After program has run');

peoplePromise
  .then(data => data.json())
  .then(data => {
    data.results.forEach((item) => {
      console.log(item.name);
    });
  })
  .catch((err) => {
    console.log(err);
});
```

3. Análisis y manipulación de los datos de la respuesta:

* Convierte la respuesta al formato JSON.
* Accede a campos de datos específicos de la respuesta, como `name`.

```javascript
peoplePromise
  .then(data => data.json())
  .then(data => {
    data.results.forEach((item) => {
      console.log(item.name);
    });
  })
  .catch((err) => {
    console.log(err);
});
```

4. Control de errores

* Implementa un bloque `.catch()` para manejar errores, como llamadas fallidas a la API (se pueden simular cambiando https por http en el método fetch).

```javascript
.catch((err) => {
  console.log(err);
});
```

Resultado en la consola:

```
"Luke Skywalker"
"C-3PO"
"R2-D2"
"Darth Vader"
"Leia Organa"
"Owen Lars"
"Beru Whitesun lars"
"R5-D4"
"Biggs Darklighter"
"Obi-Wan Kenobi"
```

### Cómo agrupar promesas en JavaScript con Promise.all()

Cuando necesitamos agrupar varias promesas para agilizar nuestro código, podemos emplear la función `Promise.all`. En ella incluimos una matriz por la que iterar para obtener los resultados de cada promesa.

Las promesas `greeting` y `updateAccount` representan diferentes actividades que podrían ocurrir durante el proceso de inicio de sesión de un usuario: saludar y registrar el inicio de sesión.

`Promise.all()` agrupa estas promesas en la variable `loginActivities`.

`Promise.all()` devuelve una promesa, así que necesitamos usar `.then()` para obtener el resultado. Usando `.forEach()` se accede al resultado de cada promesa individual.

```javascript
const greeting = new Promise((resolve, reject)=>{
  resolve('Hi there');
  reject('Ooops, bad greeting');
});

const updateAccount = new Promise((resolve, reject)=>{
  resolve('Updating login...');
  reject('Error updating account with login');
});

const loginActivities = Promise.all([greeting, updateAccount])
// console.log(loginActivities); Demuestra que de Promise.all obtenemos una promesa
loginActivities.then(response => {
  response.forEach(activity=>{
    console.log(activity);
  })
})
```
