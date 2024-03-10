#1: Cree un bucle For de Python.
print('Ejercicio 1:')
for num in range(6):
    print(num)
print()

#2: Cree una función de Python llamada suma que tome 3 argumentos y devuelva la suma de los 3.
def suma(arg1, arg2, arg3):
    return arg1 + arg2 + arg3

print('Ejercicio 2:', suma(13, 12, 8))
print()

#3: Cree una función lambda con la misma funcionalidad que la función de suma que acaba de crear.
resultado_lambda = lambda arg1, arg2, arg3: arg1 + arg2 + arg3
print('Ejercicio 3:', resultado_lambda(4,5,6))
print()

#4: Utilizando la siguiente lista y variable, determine si el valor de la variable coincide o no con un valor de la lista. *Sugerencia, si es necesario, utilice un bucle for in y el operador in.
nombre = 'Enrique'
lista_nombre = ['Jessica', 'Paul', 'George', 'Henry', 'Adán']
if nombre in lista_nombre:
    print('Ejercicio 4: El nombre coincide con un valor de la lista.')
else:
    print('Ejercicio 4: El nombre no coincide con ningún valor de la lista.')