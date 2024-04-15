# 📈 ¿Qué hace el operador de extensión en JavaScript?

El operador de propagación se puede utilizar para combinar matrices, copiarlas, trabajar con argumentos de función y realizar la desestructuración de objetos de manera eficiente.

#### Sintaxis

```
...word
```

#### Combinar matrices

```javascript
let shoppingCart = [345, 375, 765, 123];
let newItems = [98, 123];

shoppingCart.push(...newItems);
console.log(shoppingCart); // [345, 375, 765, 123, 98, 123]
```

#### Copiar matrices

```javascript
const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart];
updatedCart.push(5);
console.log(updatedCart); // [345, 375, 765, 123, 5]
console.log(shoppingCart); // [345, 375, 765, 123]
```

#### Trabajar con argumentos de función

```javascript
const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals)); // 10
```

#### Desestructurar objetos

```javascript
const { starter, closer, ...relievers } = {
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter); // Verlander
console.log(closer); // Giles
console.log(relievers); // {"relief_1": "Morton",  "relief_2": "Gregerson"}
```
