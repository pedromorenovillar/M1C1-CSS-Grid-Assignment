/*
Cree una función JS que acepte 4 argumentos.
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!".
Si es más pequeño, la consola registra "¡El número es menor que 50!"
*/

function myFunction (arg1, arg2, arg3, arg4) {

    if (typeof arg1, arg2, arg3, arg4 !== 'number') {
        console.log('Solo se admiten números')
    }

    result = (arg1 + arg2) * (arg3 + arg4)
    console.log(result)
    if (result > 50) {
        console.log('¡El número es mayor que 50!')
    }
    else if (result < 50) {
        console.log('¡El número es menor que 50!')
    }
    else if (result === 50) {
        console.log('¡El número es 50!')
    }
}

myFunction(1,2,3,4)
myFunction(5,5,5,5)
myFunction(1,4,1,9)
myFunction(1,'b',1,9)
