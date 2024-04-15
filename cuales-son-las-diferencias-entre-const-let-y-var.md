# ❓ ¿Cuáles son las diferencias entre const, let y var?

La palabra clave `const` asegura que la variable permanezca **constante** a lo largo del programa, evitando reasignaciones accidentales y mejorando la fiabilidad del código. Se recomienda usar `const` como la opción predeterminada para la declaración de variables.

* `var`: Permite la redeclaración y el hoisting, con alcance a la función.
* `let`: Permite la reasignación, con alcance de bloque.
* `const`: Debe inicializarse y no puede ser reasignado, con alcance de bloque.

```javascript
// Usando let
let city = 'Scottsdale';
console.log(city); // Salida: Scottsdale

city = 'Phoenix'; // Reasignando la variable
console.log(city); // Salida: Phoenix
```

```javascript
// Usando const
const city = 'Scottsdale';
console.log(city); // Salida: Scottsdale

// Intentar reasignar una variable constante resulta en un error
city = 'Phoenix'; // Error: Uncaught TypeError: Assignment to constant variable
```
