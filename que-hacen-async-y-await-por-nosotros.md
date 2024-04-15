# ⏯️ ¿Qué hacen async y await por nosotros?

En versiones antiguas de JS, los desarrolladores se enfrentaban a un problema llamado «callback hell», donde tenían que anidar todos los procesos de una actividad para asegurarse de que tenían lugar en el orden correcto debido a que JS tiene una naturaleza asíncrona.

Afortunadamente, las palabras clave `async` y `await` se crearon para solucionar este problema.

La función `login` devuelve una promesa que simula el inicio de sesión del usuario con un retraso de dos segundos para imitar una operación asíncrona. La función `updateAccount` simula la actualización de la cuenta del usuario. La función `loginActivities` utiliza `async` para indicar que la función es asíncrona. Dentro de esta función, `await` hace esperar que `login()` se complete antes de ejecutar `updateAccount`.

```javascript
const login = () => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('User logged in...');
    }, 2000);
  });
}

const updateAccount = () => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities() {
  const returnedLogin = await login(); // Que no ocurra nada hasta que login() haya terminado. Luego añade datos a returnedlogin.
  console.log(returnedLogin);
  const returnedUpdateAccount = await updateAccount();
  console.log(returnedUpdateAccount);
}

loginActivities();
```

### Cómo combinar async/await con clausuras en JavaScript

Podemos combinar async/await con una `clausura` (EN: closure) en JavaScript para garantizar que todos los procesos asíncronos se hayan ejecutado antes de mostrar cualquier resultado.

Una clausura es básicamente una función que se asigna a una variable y puede pasarse a otras funciones.

Para hacerlo, añadimos a la función `loginActivities` dos argumentos: inicio y actualización, lo que permite pasar las funciones `login` y `updateAccount` como argumentos al llamar la función y luego utilizarlas como clausuras dentro de loginActivities.

`loginActivities` esperará a que tanto `login` como `updateAccount` se completen antes de mostrar cualquier resultado.

```javascript
const login = () => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('User logged in...');
    }, 4000);
  });
}

const updateAccount = () => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Updating last login...');
    }, 2000);
  });
}

async function loginActivities(inicio, actualización) { // Añadimos argumentos
  const returnedLogin = await inicio;
  console.log(returnedLogin);
  
  const returnedUpdateAccount = await actualización;
  console.log(returnedUpdateAccount);
}

loginActivities(login(), updateAccount()); // Pasamos funciones al llamar loginActivities
```

### Cómo utilizar async/await para comunicarnos con APIs externas en JavaScript

Podemos usar `async/await` para gestionar múltiples solicitudes asíncronas y garantizar que los datos de distintas APIs se procesen en el orden correcto, independientemente de cuánto tiempo tarde en completarse cada solicitud. Esto es vital cuando se necesita autenticar datos.

Para ello, se crea una función asíncrona, `queryApis`, que solicita la respuesta a dos APIs en un orden específico y les da formato json.

```javascript
async function queryApis() {
  const peoplePromise = fetch('https://swapi.dev/api/people/');
  const people = await peoplePromise.then(res => res.json()); // res = response
  console.log(people);
  
  const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
  const repos = await reposPromise.then(res => res.json());
  console.log(repos) 
}

queryApis();
```

### Cómo implementar gestión de errores en una función async/await de JS

Es importante implementar gestión de errores al trabajar con solicitudes de API, ya que estas pueden fallar. En los siguientes ejemplos se simula el error sustituyendo `https` por `http`.

#### Opción 1: Envolver todo el bloque en try-catch

Esta opción detiene el proceso y muestra 'TypeError: Failed to fetch' si falla cualquiera de las solicitudes de API. Es útil si queremos detener completamente el proceso sin ejecutar nada más, por ejemplo, si las promesas están conectadas entre sí (autenticación).

```javascript
async function queryApis() {
  try {
    const peoplePromise = fetch('https://swapi.dev/api/people/');
    const people = await peoplePromise.then(res => res.json());
    console.log(people);
      
    const reposPromise = fetch('http://api.github.com/users/jordanhudgens/repos');
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
    } catch(err) {
    console.log(err);
  }
}

queryApis();
```

#### Opción 2: Utilizar un bloque try-catch por cada promesa

Proporciona más información sobre qué API causó el error, lo que puede ser útil para el diagnóstico. Esta opción es la más extendida en la industria, y nos sirve cuando necesitamos uno de los dos procesos aunque falle el otro.

```javascript
async function queryApis() {
  try {
    const peoplePromise = fetch('http://swapi.dev/api/people/');
    const people = await peoplePromise.then(res => res.json()); 
    console.log(people);
    } catch(err) {
    console.log(err);
    console.log('There was an error with the SWAPI API');
  }
  
  try {
    const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
    const repos = await reposPromise.then(res => res.json());
    console.log(repos);
    } catch(err) {
    console.log(err);
    console.log('There was an error with the Github API');
  }
}

queryApis();
```
