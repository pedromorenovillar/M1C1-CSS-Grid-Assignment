## Índice
1. [¿Para qué usamos clases en Python?](#clases)
2. [¿Qué método se ejecuta automáticamente cuando se crea una instancia de una clase?](#__init__)
8. [¿Qué es un método dunder?](#dunder)
9. [¿Qué es un decorador de Python?](#decorador)
7. [¿Qué es el polimorfismo?](#polimorfismo)
5. [¿Qué es una API?](#api)
3. [¿Cuáles son los tres verbos de API?](#verbos)
6. [¿Qué es Postman?](#postman)
4. [¿Es MongoDB una base de datos SQL o NoSQL?](#mongodb)



### ¿Para qué usamos clases en Python? <a id="clases"></a>
Python es un lenguaje de programación orientado a objetos donde las clases funcionan como moldes o prototipos para crear los objetos. Las clases definen la estructura y el comportamiento de los objetos, y utilizarlas nos permite crear objetos que compartan atributos y características similares. 
#### Sintaxis
Para crear una clase, hay que usar la palabra clave **class** seguida del nombre en mayúscula y dos puntos.

A continuación, indentamos los atributos y características de la clase.

Una vez que hayamos creado una clase, podremos crear objetos a partir de ella asignando a una variable el nombre de la clase seguido de paréntesis de apertura y cierre. Esto se denomina crear una instancia de una clase.

Para acceder a los atributos del objeto, debemos escribir el objeto seguido de punto y el atributo que hayamos creado en la clase.

```python
class Nombre:
    atributos

objeto = Nombre()
```

#### Ejemplo

```python
class Cat:
    pelt = 'Gold'
    eye_color = 'Blue'
    sound = 'Meow'
    name = 'Whiskers'

# Creamos un objeto de la clase Cat
my_cat = Cat()

# Accedemos a los atributos
print(my_cat.name)  # Output: Whiskers
```

#### Fuentes
[Real Python](https://realpython.com/python-classes/) |
[W3Schools](https://www.w3schools.com/python/python_classes.asp) | [GeeksforGeeks](https://www.geeksforgeeks.org/python-classes-and-objects/?ref=lbp)
### ¿Qué método se ejecuta automáticamente cuando se crea una instancia de una clase? <a id="__init__"></a>
Python incorpora el método `__init__()`, que siempre se ejecuta cuando se inicia la clase, permitiéndonos asignar valores a los atributos de los objetos o llevar a cabo otras operaciones necesarias al crearlos.

#### Sintaxis
Para utilizar el método `__init__()`, escribimos **`def __init__():`** y, entre los paréntesis, añadimos los atributos para los que vamos a pasar valores al objeto.

```python
class Nombre:
    def __init__(self, atributos)
    atributos

objeto = Nombre()
```

#### Ejemplo
```python
class Cat:
    def __init__(self, ):
    pelt = 'Gold'
    eye_color = 'Blue'
    sound = 'Meow'
    name = 'Whiskers'

# Creamos un objeto de la clase Cat
my_cat = Cat()

# Accedemos a los atributos
print(my_cat.name)  # Output: Whiskers
```
#### Fuentes
### ¿Cuáles son los tres verbos de API? <a id="verbos"></a>
#### Sintaxis
#### Ejemplo
#### Fuentes
### ¿Es MongoDB una base de datos SQL o NoSQL? <a id="mongodb"></a>
#### Sintaxis
#### Ejemplo
#### Fuentes
### ¿Qué es una API? <a id="api"></a>
#### Sintaxis
#### Ejemplo
#### Fuentes
### ¿Qué es Postman? <a id="postman"></a>
#### Sintaxis
#### Ejemplo
#### Fuentes
### ¿Qué es el polimorfismo? <a id="polimorfismo"></a>
#### Sintaxis
#### Ejemplo
#### Fuentes
### ¿Qué es un método dunder? <a id="dunder"></a>
#### Sintaxis
#### Ejemplo
#### Fuentes
### ¿Qué es un decorador de Python? <a id="decorador"></a>
