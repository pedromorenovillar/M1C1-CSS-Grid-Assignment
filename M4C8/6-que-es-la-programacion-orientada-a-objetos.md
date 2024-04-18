---
cover: >-
  https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3MTM0MjQ4Mzh8MA&ixlib=rb-4.0.3&q=85
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

# 💡 ¿Qué es la programación orientada a objetos?

### Definición

La programación orientada a objetos (POO) es un paradigma de programación que se centra en los objetos en lugar de en las funciones (programación funcional) o en secuencias lógicas (programación procedimental). La POO es el enfoque de programación más popular en el desarrollo de software moderno.

La POO consiste en un sistema basado en una colección donde cada objeto contiene los datos y las funciones para utilizarlos, de tal forma que solo las funciones del objeto puedan emplear dichos datos.

### ¿Por qué se utiliza?

La POO es el enfoque de programación más popular porque cuenta con una serie de características que proporcionan considerables ventajas al programar:

1. Es posible representar objetos complejos mediante estructuras sencillas que se pueden reproducir (clases).
2. Los objetos creados en un programa pueden emplearse en otro programa diferente.
3. El polimorfismo permite definir un comportamiento específico para las clases.
4. Es fácil descubrir los errores en el código, ya que las clases contienen toda la información.
5. Los datos están protegidos de acciones y eventos inesperados mediante encapsulación.

### ¿Cómo se utiliza?

En la programación orientada a objetos es importante comprender los conceptos de **objeto** y **clase**.

### Objetos

Los objetos en POO son representaciones de entidades del mundo real. Cuentan con propiedades (los datos del objeto) y métodos (las acciones que realiza el objeto).

<figure><img src=".gitbook/assets/object (1).svg" alt=""><figcaption><p>Los objetos tienen métodos y propiedades</p></figcaption></figure>

En el siguiente ejemplo creamos un objeto llamado `Toby`. Tiene las propiedades color y especie, y el método onomatopeya. A continuación, ejecutamos el método del objeto.

**Ejemplo**

```javascript
let Toby = {
  especie: 'perro',
  color: 'marrón',
  onomatopeya() {
    console.log('¡guau!');
  }
};
Toby.onomatopeya(); // "¡guau!"
```

<figure><img src=".gitbook/assets/toby (1).svg" alt=""><figcaption><p>Representación de un objeto</p></figcaption></figure>

### **Clases**

Las clases son como un molde que define la estructura y el comportamiento de los objetos, y a partir de las cuales podemos crear (o instanciar) diferentes objetos con las mismas características.

<figure><img src=".gitbook/assets/clases (3).svg" alt=""><figcaption><p>Usamos clases para crear objetos</p></figcaption></figure>

### **Cómo crear una clase**

Al crear una clase, añadimos el método `constructor` para pasarle valores iniciales con la palabra clave `this`.

**Sintaxis**

```javascript
class name {
  constructor({propiedad}) {
    this.propiedad = propiedad
  }
}
```

**Ejemplo**

```javascript
class Animal {
  constructor(nombre, especie, color) {
  // Ejemplo de propiedades
    this.nombre = nombre;
    this.especie = especie;
    this.color = color;
  }
  
  // Ejemplo de método
  onomatopeya(sonido) {
    this.sonido = sonido;
    console.log(`${this.nombre} hace ${this.sonido}.`);
  }
}
```

### **Cómo instanciar un objeto de una clase**

La `instanciación` es el proceso de crear objetos del mundo real basados en un plano de clase.

Para instanciar un objeto lo asignamos a una variable con la palabra clave `new`. Añadimos las propiedades entre paréntesis.

**Sintaxis**

```javascript
const name = new className(propiedad)
```

En el siguiente ejemplo creamos una clase llamada `Animal` con una serie de propiedades (nombre, especie, color y sonido), y un método (onomatopeya). A continuación instanciamos dos objetos a partir de ella (Toby y Sultán) y accedemos al método `onomatopeya` del ambos.

```javascript
class Animal {
  constructor(nombre, especie, color) {
  // Ejemplo de propiedades
    this.nombre = nombre;
    this.especie = especie;
    this.color = color;
  }
  
  // Ejemplo de método
  onomatopeya(sonido) {
    this.sonido = sonido;
    console.log(`${this.nombre} hace ${this.sonido}.`);
  }
}

let Toby = new Animal('Toby', 'perro', 'marrón');
Toby.onomatopeya('guau'); // "Toby hace guau."

let Sultán = new Animal('Sultán', 'gato', 'gris');
Sultán.onomatopeya('miau'); // "Sultán hace miau."
```

<figure><img src=".gitbook/assets/clases_objetos (2).svg" alt=""><figcaption></figcaption></figure>

### Características principales de la POO

Las principales características de la programación orientada a objetos son las siguientes:

### **Encapsulación**

La encapsulación significa que la representación interna de un objeto está oculta del exterior.

En el siguiente ejemplo, la propiedad `_marca` está encapsulado en la clase Coche, es decir, solo puede accederse a él mediante el método `get` y modificarse con el método `set`.

#### Ejemplo

```javascript
class Coche {
  constructor(marca) {
    this._marca = marca;
  }

  get marca() {
    return this._marca;
  }

  set marca(nuevaMarca) {
    this._marca = nuevaMarca;
  }
}

let miCoche = new Coche('Seat');
console.log(miCoche.marca); // Seat
miCoche.marca = 'Audi';
console.log(miCoche.marca); // Audi
```

<figure><img src=".gitbook/assets/encapsulacion.svg" alt=""><figcaption></figcaption></figure>

### **Herencia**

La herencia significa que una clase extiende sus datos y comprotamiento a otra. Para utilizar la herencia en JavaScript, al declarar una clase dependiente de otra usamos la palabra clave `extends` y el nombre de la clase original.

En el siguiente ejemplo, la clase `Perro` hereda las propiedades nombre y especie de la clase `Animal`, aunque cuenta con un método `onomatopeya` propio.

#### Ejemplo

```javascript
class Animal {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }
  
  onomatopeya(sonido) {
    this.sonido = sonido;
    console.log(`${this.nombre} hace ${this.sonido}.`);
  }
}

class Perro extends Animal {
  
  onomatopeya(sonido) {
    this.sonido = sonido;
    console.log(`${this.nombre} es un ${this.especie} que hace ${this.sonido}.`);
  }
}


let Toby = new Perro('Toby', 'perro');
Toby.onomatopeya('guau'); // "Toby es un perro que hace guau."
```

<figure><img src=".gitbook/assets/herencia (1).svg" alt=""><figcaption></figcaption></figure>

### **Polimorfismo**

El polimorfismo nos permite que métodos, objetos u operadores con el mismo nombre se ejecuten en muchos objetos y clases.

En el siguiente ejemplo, la clase `Animal` tiene un constructor con las propiedades especie y sonido, y un método llamado `onomatopeya`. Las subclases `Perro` y `Gato` heredan propiedades de `Animal` con la palabra clave `extends`, aunque cuentan con sus propios métodos `onomatopeya`. Por último, tenemos la función `ruido`, que toma como argumento un animal y ejecuta su función `onomatopeya` del animal correspondiente, sobrescribiendo la de `Animal`.

#### Ejemplo

```javascript
class Animal {
  constructor(especie, sonido) {
    this.especie = especie;
    this.sonido = sonido;
  }
  onomatopeya() {
    console.log(`Este ${this.especie} hace ${this.sonido}.`);
  }
}

class Perro extends Animal {
  especie = 'perro';
  onomatopeya() {
    console.log(`Este ${this.especie} hace guau.`);
  }
}

class Gato extends Animal {
  especie = 'gato';
  onomatopeya() {
    console.log(`Este ${this.especie} hace miau.`);
  }
}

function ruido(animal) {
  animal.onomatopeya();
}

ruido(new Perro());
ruido(new Gato());
```

<figure><img src=".gitbook/assets/polimorfismo.svg" alt="" width="356"><figcaption></figcaption></figure>

### **Abstracción**

La abstracción es un proceso de POO donde se ocultan los detalles de implementación complejos y solo se muestran las características esenciales de un objeto, lo que simplifica la interfaz y reduce el impacto de los cambios.

Un ejemplo del mundo real sería conducir una moto: para que la moto gire a la izquierda, el conductor tiene que girar el manillar a la izquierda, no preocuparse por cómo se mueven el eje y los piñones de la moto.

En el siguiente ejemplo, la clase `Vehículo` es una clase genérica con cuatro métodos: `arrancar`, `parar`, `volar` y `flotar`. La clase `Moto` es una subclase de la clase `Vehículo` y supone un nivel de abstracción más específico con métodos ajustados a ese tipo de vehículo.

#### Ejemplo

```javascript
class Vehículo {
  arrancar() {
    console.log('El motor ha arrancado');
  }
  parar() {
    console.log('El motor ha parado');
  }
  
  volar() {
    console.log('La nave está en el aire');
  }
  
  flotar() {
    console.log('El barco está navegando');
  }
}

class Moto extends Vehículo {
  arrancar() {
    console.log('La moto se ha arrancado');
  }
  parar() {
    console.log('La moto se ha detenido');
  }
}

let miMoto = new Moto();
miMoto.arrancar(); // "La moto se ha arrancado"
```

<figure><img src=".gitbook/assets/abstraccion.svg" alt=""><figcaption><p>Ejemplo de abstracción y herencia</p></figcaption></figure>

### Vídeos de resumen

{% embed url="https://www.youtube.com/watch?v=pTB0EiLXUC8" %}

{% embed url="https://www.youtube.com/watch?v=m_MQYyJpIjg" %}

### Fuentes

[Geeksforgeeks](https://www.geeksforgeeks.org/introduction-of-object-oriented-programming/) | [educative.io](https://www.educative.io/blog/object-oriented-programming) | [mdn](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented\_programming) | [codecademy](https://www.codecademy.com/resources/blog/object-oriented-programming/) | [dev.to](https://dev.to/bartzalewski/object-oriented-programming-in-javascript-with-examples-updated-2024-5ac4)
