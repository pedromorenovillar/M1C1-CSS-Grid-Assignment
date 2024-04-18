---
cover: >-
  https://images.unsplash.com/photo-1592312040834-bb0d621713e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw0fHxkaWZmZXJlbmNlc3xlbnwwfHx8fDE3MTMxNzQ1MTN8MA&ixlib=rb-4.0.3&q=85
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

# ❓ ¿Cuáles son las diferencias entre const, let y var?

### ¿Qué es una variable?

En programación, una variable es un contenedor que almacena un valor que podemos volver a utilizar en nuestro código sin necesidad de tener que escribir de nuevo el valor inicial. Este valor puede ser un número que queremos utilizar en una operación aritmética o una cadena que vayamos a incluir en una frase, por ejemplo.

<figure><img src="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?crop=entropy&#x26;cs=srgb&#x26;fm=jpg&#x26;ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHwxfHxjb250YWluZXJ8ZW58MHx8fHwxNzEzMTc5NDA5fDA&#x26;ixlib=rb-4.0.3&#x26;q=85" alt="" width="375"><figcaption></figcaption></figure>

#### Ejemplo

```javascript
var nombre = 'Antonio';
var edad = 55;

console.log(`${nombre} tiene ${edad} años`)

// "Antonio tiene 55 años"
```

En el ejemplo de arriba, las dos variables, `nombre` y `edad`, son contenedores para una cadena y un valor numérico que se emplean dentro de la frase.

### Cómo se crea

Para utilizar una variable, hay que crearla mediante un proceso llamado **declaración**, que consiste en escribir las palabras clave `let`, `var` o `const` seguidas de el nombre de la variable y un punto y coma.

**Sintaxis**

```javascript
var nombre;
let nombre;
const nombre;
```

**Ejemplo**

<pre class="language-javascript"><code class="lang-javascript"><strong>var nombreUsuario;
</strong>let edadUsuario;

console.log(nombreUsuario); // undefined
console.log(edadUsuario); // undefined
</code></pre>

Cuando únicamente declaramos variables estamos creando contenedores vacíos, como se puede observar al imprimir en la consola las dos variables recién declaradas.

### Cómo se le asigna un valor

Para inicializar una variable y así asignarle un valor, tenemos que escribir el nombre de la variable seguido del signo igual (`=`) y el valor que le queramos asignar.

**Sintaxis**

<pre class="language-javascript"><code class="lang-javascript"><strong>nombre = valor;
</strong></code></pre>

**Ejemplo**

<pre class="language-javascript"><code class="lang-javascript"><strong>nombreUsuario = 'José';
</strong><strong>edadUsuario = 18;
</strong><strong>
</strong><strong>console.log(nombreUsuario); // 'José'
</strong><strong>console.log(edadUsuario); // 18
</strong></code></pre>

### Cómo se actualiza

Cuando hemos inicializado una variable con un valor, es posible actualizarlo con otro diferente.

<pre class="language-javascript"><code class="lang-javascript"><strong>nombreUsuario = 'José';
</strong>console.log(nombreUsuario); // 'José'
nombreUsuario = 'Guillermo';
console.log(nombreUsuario); // 'Guillermo'
</code></pre>

### Declarar e inicializar una variable

Es posible declarar e inicializar una variable (o varias) al mismo tiempo. De hecho, es más rápido que llevar a cabo ambas acciones por separado.

**Sintaxis**

<pre class="language-javascript"><code class="lang-javascript"><strong>var nombre = valor;
</strong><strong>let nombre = valor;
</strong>const nombre = valor;
</code></pre>

**Ejemplo**

```javascript
var edadUsuario = 23;
let provinciaUsuario = 'Granada', ciudadUsuario = 'Salobreña';
const nombreUsuario = 'Marco Llorente';
```



<figure><img src=".gitbook/assets/cactus.jpg" alt="" width="320"><figcaption></figcaption></figure>

### Diferencias entre `var`, `let` y `const`



Hemos visto [arriba ](2-cuales-son-las-diferencias-entre-const-let-y-var.md#como-se-crea)que al declarar una variable podemos emplear las palabras clave `var`, `let` y `const`. La palabra clave que utilicemos al declararla determinará el comportamiento y alcance de nuestra variable.

### Recomendaciones de uso

Debido a las características que se detallan a continuación, se recomienda usar `const` siempre que sea posible y, cuando este no sea el caso, utilizar `let`; `var` debería de evitarse en la medida de lo posible.

### Palabra clave `var`

Esta era la única palabra clave para declarar variables entre 1995 y 2015, e únicamente debería emplearse en código escrito para navegadores antiguos.

**Características**

1. Permite volver a declarar la variable.

Es posible volver a declarar una variable declarada inicialmente con `var`, como hemos visto [arriba](2-cuales-son-las-diferencias-entre-const-let-y-var.md#como-se-actualiza). Esta característica nos puede llevar a sobrescribir fácilmente los valores sin darnos cuenta.

<pre class="language-javascript"><code class="lang-javascript"><strong>var valorAhorro = 15000;
</strong>console.log(valorAhorro); // 15000
var valorAhorro = 1000;
console.log(valorAhorro); // 1000
</code></pre>

2. Permite el hoisting.

JavaScript mueve de forma predeterminada todas las declaraciones de variables y funciones al principio del ámbito actual en un mecanismo conocido como hoisting (to hoist = levantar). Esto supone que, al utilizar `var`, se puede usar una variable antes de haberla declarado.

```javascript
saludo = 'Hola'
console.log(saludo); // "Hola"
var saludo;
```

Es importante mencionar que el hoisting afecta **solo a las declaraciones**, no a las asignaciones, como vemos en este ejemplo, donde tenemos la variable saludo asignada. En este caso, JavaScript devuelve `undefined` porque reconoce que hay una variable para saludo y le asigna un espacio en la memoria, pero el hoisting no se produce con el valor asignado a la variable.

```javascript
console.log(saludo); // undefined
var saludo = 'Hola';
console.log(saludo); // 'Hola'
```

**Problemas con hoisting**

El mecanismo de hosting puede suponer un problema cuando usamos `var`, ya que nos puede llevar a asignar valores que no deseamos a variables, como ilustra el siguiente ejemplo:

```javascript
var saludo = "Hola";
var contador = 4;

if (contador > 3) {
  var saludo = "No digas hola"; 
}

console.log(saludo) // "No digas hola"
```

Para evitar problemas de hoisting, se recomienda siempre declarar todas las variables al principio de cada ámbito.

3. Tiene alcance local en una función.

Una variable declarada con `var` dentro de una función es solo accesible en esa función.&#x20;

```javascript
function saludo() {
  var hola = 'hola';
  
  console.log(hola)
}
saludo();
```

Es decir, la variable `hola` no va a ser visible desde fuera de la función:

```javascript
function saludo() {
  var hola = 'hola';
};
saludo();
console.log(hola) // Uncaught ReferenceError: hola is not defined 
```

4. Fuera de una función, tiene alcance global y añade propiedades al objeto Window.

Ahora bien, las variables declaradas con `var` fuera de una función tienen un alcance global, es decir, pueden ser usadas en cualquier parte de nuestro código:

```javascript
var hola = '¡Hola!' // Variable global
function saludo() {
  var hola = '¡Buenas!'; // Variable local
  console.log(hola) // ¡Buenas!
}

saludo();
console.log(hola); // ¡Hola!
```

Y se puede acceder a ellas desde el objeto Window.



### Palabra clave `let`

`let` es una palabra clave empleada para declarar variables que fue creada en 2015 para suplir las carencias que tiene `var`. Se recomienda usar `let` en lugar de `var` siempre que sea posible.

**Características**

1. Permite la reasignación, pero no la redeclaración.

Podemos volver a asignar un valor a una variable `let:`

```javascript
let valorAhorro = 15000;
console.log(valorAhorro); // 15000
valorAhorro = 1000;
console.log(valorAhorro); // 1000
```

Ahora bien, no podemos volver a declararla, algo que sí podíamos hacer con `var`. Es decir, no podemos crear por error dos variables `let` con el mismo nombre.

```javascript
let valorAhorro = 15000;
console.log(valorAhorro); // 15000
let valorAhorro = 1000;
console.log(valorAhorro); // Identifier 'valorAhorro' has already been declared
```

2. Tiene alcance de bloque.

Las variables `let` solo son accesibles dentro del bloque `{}` donde han sido declaradas.

```javascript
var contador = 4;

if (contador > 3) {
  let saludo = "No digas hola";
  console.log(saludo) // "No digas hola"
}

console.log(saludo) // Uncaught ReferenceError: saludo is not defined
```

3. No se puede utilizar antes de declararla e inicializarla.

El hoisting afecta a las variables let de forma diferente a las variables var: no se les asigna un valor `undefined`. Aunque JavaScript las detecta, muestra un error de acceso.

```javascript
console.log(saludo); // ReferenceError: Cannot access 'saludo' before initialization 
let saludo = 'Hola';
console.log(saludo); // 'Hola'
```





### Palabra clave `const`



La palabra clave `const` asegura que el valor asignado a la variable permanezca **constante** a lo largo del programa, evitando reasignaciones accidentales y mejorando la fiabilidad del código. Se recomienda usar `const` como la opción predeterminada para la declaración de variables.

**Características**

1. Al usar `const` siempre debemos asignarle un valor:

```javascript
const nombre = 'Julio';
console.log(nombre);
```

No asignarle un valor genera un error:

<pre class="language-javascript"><code class="lang-javascript"><strong>nombre = 'Julio';
</strong>console.log(nombre);
const nombre; // Uncaught SyntaxError: Missing initializer in const declaration 
</code></pre>

2. `const` no puede ser reasignada:

```javascript
const value = 33;
value = 55; // Uncaught TypeError: Assignment to constant variable. 
```

3. `const` tiene alcance de bloque:

```javascript
let counter = 5;
if (counter > 3) {
  const value = 33;

  console.log(value); // 33
}

console.log(value); // ReferenceError: value is not defined 
```

4. No se puede utilizar antes de declararla e inicializarla.

El hoisting afecta a las variables `const` de forma diferente a las variables var: no se les asigna un valor `undefined`. Aunque JavaScript las detecta, muestra un error de acceso.

```javascript
console.log(saludo); // ReferenceError: Cannot access 'saludo' before initialization 
const saludo = 'Hola';
console.log(saludo); // 'Hola'
```



### Vídeos de resumen



{% embed url="https://www.youtube.com/watch?v=dzEieWaOJE0" %}
Diferencias básicas entre var, let y const
{% endembed %}

{% embed url="https://www.youtube.com/watch?v=j-9_15QBW2s" %}
Hoisting con var, let y const
{% endembed %}

### Fuentes

[mdn Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First\_steps/Variables) | [W3schools](https://www.w3schools.com/js/js\_variables.asp) | [Geeksforgeeks](https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/) | [Freecodecamp](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
