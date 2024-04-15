# ➡️ ¿Qué es una función de flecha?

#### Declaración de función

```javascript
function fullName(fName, lName) {
  console.log(`${fName} ${lName}`)
}
fullName('Michael', 'Jordan');
```

#### Expresión de función

```javascript
fullName = function (fName, lName) {
  console.log(`${fName} ${lName}`)
}
fullName('Michael', 'Jordan');
```

Las funciones de flecha tienen una sintaxis concisa en comparación con las declaraciones de funciones tradicionales.

#### Sintaxis

```
variable = () => {acción}
```

```javascript
helloWorld = () => { console.log("¡Hola mundo!"); }
helloWorld();
```

#### Funciones de flecha con un solo argumento

Cuando una función tiene solo un argumento, puedes omitir los paréntesis alrededor de la lista de argumentos.

```javascript
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');
```

#### Funciones de flecha con varios argumentos

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
