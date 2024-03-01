from decimal import Decimal
import math

# Exercise 1
my_list = ['Almería', 'Cádiz', 'Sevilla', 'Málaga', 'Córdoba', 'Huelva']
my_tuple = ('Gipuzkoa', 'Bizkaia')
my_float = 48.75
my_integer = 42
my_decimal = Decimal(24.8)
my_dictionary = {
    'Hola': 'Kaixo',
    'Gracias': 'Eskerrik asko',
    'Adiós': 'Agur'
}

# Exercise 2
my_float_rounded_up = math.ceil(my_float)
print('Exercise 2:', my_float_rounded_up)

# Exercise 3
my_float_sqr = math.sqrt(my_float)
print('Exercise 3:', my_float_sqr)

# Exercise 4
my_dictionary_first_element = list(my_dictionary.items())[0]
print('Exercise 4:', my_dictionary_first_element)

# Exercise 5
my_tuple_second_element = my_tuple[1]
print('Exercise 5:', my_tuple_second_element)

# Exercise 6
my_new_list = my_list + ['Jaén']
print('Exercise 6:', my_new_list)

# Exercise 7
my_list[0] = 'Granada'
print('Exercise 7:', my_list)

# Exercise 8
my_list_sorted = sorted(my_list)
print('Exercise 8:', my_list_sorted)

# Exercise 9
my_tuple = my_tuple + ('Araba',)
print('Exercise 9:', my_tuple)