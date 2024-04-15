# 🏗️ ¿Qué es la deconstrucción de variables?

Hace unos años la única manera de intercambiar valores entre variables era usando variables temporales.

```javascript
let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

// Intercambio de valores usando variables temporales
let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;

console.log(`
Jugador Uno: ${playerOne} // Kristine
Jugador Dos: ${playerTwo} // Tiffany
`);
```

Afortunadamente ahora se puede simplificar el código empleando la desestructuración de variables:

```javascript
let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

// Intercambio de valores usando variables temporales
[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Jugador Uno: ${playerOne} // Kristine
Jugador Dos: ${playerTwo} // Tiffany
`);
```

### Cómo desestructurar una matriz en JavaScript

También es posible desestructurar una matriz de la misma manera que las variables. Hay que prestar atención al orden en el que colocamos las distinas variables para la desestucturación.

```javascript
const apiList = [
  'https://api.dailysmarty.com/posts',
  'https://api.github.com/users/jordanhudgens/repos',
  'https://api.github.com/users/jordanhudgens'
]

const [posts, repos, profile] = apiList;

console.log(posts); // 'https://api.dailysmarty.com/posts'
console.log(repos); // 'https://api.github.com/users/jordanhudgens/repos'
console.log(profile); // 'https://api.github.com/users/jordanhudgens'
```

### Cómo emplear la desestructuración para pasar objetos como argumentos de funciones

En este caso es muy importante que los argumentos tengan el mismo nombre que las claves del objeto.

```javascript
const user = {
  name: 'Kristine',
  email: 'kristine@devcamp.com'
}

const renderUser = ({ name, email }) => {
  console.log(`${name}: ${email}`);
}

renderUser(user); // Kristine: kristine@devcamp.com
```
