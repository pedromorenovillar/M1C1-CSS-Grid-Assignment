"""
Write a program that prints the numbers from 1 to 100.
For multiples of 3, print "Fizz" instead of the number.
For multiples of 5, print "Buzz" instead of the number.
For multiples of both 3 and 5, print "FizzBuzz" instead of the number.
For extra credit make it able to pass in an arbitrary max of value.

- Function
- Looping
- Conditionals
- Math operators

"""
def fizzbuzz(max_value):
 for num in range(1, (max_value+1)):
   if num % 3 == 0 and num % 5 == 0:
     num = 'FizzBuzz'
   elif num % 3 == 0:
     num = 'Fizz'
   elif num % 5 == 0:
     num = 'Buzz'
   print(num)

fizzbuzz(100)