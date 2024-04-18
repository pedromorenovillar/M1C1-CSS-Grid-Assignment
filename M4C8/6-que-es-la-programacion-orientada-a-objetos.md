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

Las versiones antiguas de JavaScript carecían de componentes de programación orientada a objetos, como clases e instanciación. Sin embargo, las versiones modernas de JavaScript han implementado clases.

La Programación Orientada a Objetos (POO) implica definir clases y crear objetos basados en esas clases. Una clase es como un plano que define la estructura y el comportamiento de los objetos.

Ejemplo de una clase Usuario:

```javascript
class Usuario {
  constructor(nombreUsuario) {
    this.nombreUsuario = nombreUsuario;
  }
  
  // Ejemplo de método
  iniciarSesion() {
    console.log(`${this.nombreUsuario} ha iniciado sesión.`);
  }
}
```

La `instanciación` es el proceso de crear objetos del mundo real basados en un plano de clase.

Ejemplo de instanciación:

```javascript
const usuario1 = new Usuario('Bob');
const usuario2 = new Usuario('Sally');

usuario1.iniciarSesion(); // Salida: Bob ha iniciado sesión.
usuario2.iniciarSesion(); // Salida: Sally ha iniciado sesión.
```

#### Cómo crear una clase

Al crear una clase, añadimos el método `constructor` para pasarle valores iniciales con la palabra clave `this`.

**Sintaxis**

```javascript
class name {
  constructor({atributo}) {
    this.atributo = atributo
  }
}
```

**Ejemplo**

```javascript
class Instructor {
  constructor({ name }) {
    this.name = name
  }
}
```

#### Cómo instanciar un objeto de una clase

Para instanciar un objeto lo asignamos a una variable con la palabra clave `new`. Añadimos los atributos con el tipo de datos objeto (clave-valor).

**Sintaxis**

```javascript
const name = new className({atributo: 'valor de atributo'})
```

**Ejemplo**

```javascript
const jon = new Instructor({ name: 'Jon Snow' });
console.log(jon.name); // Output: Jon Snow
```

### Cómo añadir métodos de instancia a una clase en POO en JS

Los métodos de instancia son **funciones** añadidas a las clases para definir el comportamiento o acciones de los objetos de una clase. Estos métodos pueden ejecutarse sobre una instancia específica de una clase y actúan sobre los datos almacenados en las instancias individuales (objetos) de la clase. Usos comunes:

1. **Encapsulación**: Los métodos de instancia encapsulan el comportamiento relevante para una clase específica, lo que permite una estructura de código modular y organizada.
2. **Acciones específicas del objeto**: Los métodos de instancia pueden realizar acciones u operaciones que son específicas para objetos individuales de la clase. Por ejemplo, una clase `Car` podría tener métodos como `start()` o `stop()` para controlar el motor del automóvil.
3. **Acceso y modificación de atributos del objeto**: Los métodos de instancia tienen acceso a los atributos del objeto y pueden modificarlos según sea necesario. Esto permite una interacción controlada con los datos del objeto.
4. **Implementación de lógica empresarial**: Los métodos de instancia a menudo contienen la lógica empresarial o reglas asociadas con una clase particular. Por ejemplo, una clase `BankAccount` podría tener métodos como `deposit()` y `withdraw()` para manejar transacciones mientras se aplican restricciones como requisitos de saldo mínimo.
5. **Personalización de comportamiento**: Los métodos de instancia pueden ser redefinidos en subclases para personalizar el comportamiento heredado de una clase padre, proporcionando flexibilidad y extensibilidad en la jerarquía de clases.

```javascript
class Instructor {
  constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
  }

  renderDetails() {
    console.log(`${this.name}: ${this.role}`);
  }
}
```

```javascript
const jon = new Instructor({ name: 'Jon Snow' });
const brayden = new Instructor({ name: 'Brayden', role: 'teacher' });

jon.renderDetails();
brayden.renderDetails();
```

### Métodos estáticos en POO en JS

Los métodos estáticos se ejecutan invocando a la clase y **no requieren de instancias**.

```javascript
// Definición de la clase Instructor
class Instructor {
  constructor({ name, role = "assistant" }) {
    this.role = role;
    this.name = name;
  }

  // Método de instancia para visualizar detalles
  renderDetails() {
    console.log(`${this.name} - ${this.role}`);
  }

  // Método estático básico
  static helloWorld() {
    console.log('Hi there');
  }

  // Método estático para determinar si un instructor puede enseñar
  static canTeach(instructor) {
    return (instructor.role === 'classroom');
  }
}

// Creación de instancias de Instructor
let juniorInstructor = new Instructor({ 'name' : 'Brian' });
let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });

// Llamadas a métodos de instancia para visualizar detalles
juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"

// Llamada a método estático helloWorld
Instructor.helloWorld(); // "Hi there"

// Comprobación de si los instructores pueden enseñar
console.log(`${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`); // "Brian can teach: false"
console.log(`${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`); // "Alice can teach: true"
```

En el último ejemplo, los nombres de los instructores hacen una llamada al objeto, mientras que el método estático `canTeach` solo hace una llamada a la clase.

### Vídeo de resumen



{% embed url="https://www.youtube.com/watch?v=pTB0EiLXUC8" %}

{% embed url="https://www.youtube.com/watch?v=m_MQYyJpIjg" %}

{% embed url="https://www.youtube.com/watch?v=SiBw7os-_zI" %}

