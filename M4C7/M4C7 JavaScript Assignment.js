/*
Cree una función JS que acepte 4 argumentos.
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!".
Si es más pequeño, la consola registra "¡El número es menor que 50!"
*/

function myFunction (arg1, arg2, arg3, arg4) {
    var arg1 = arg1 || 0;
    var arg2 = arg2 || 0;
    var arg3 = arg3 || 0;
    var arg4 = arg4 || 0;
    
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number' || typeof arg3 !== 'number' || typeof arg4 !== 'number') {
        console.log('Solo se admiten números')
    } else {
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
}

myFunction(1,2,3,4)
myFunction(5,5,5,5)
myFunction(1,4,1,9)
myFunction("papa",1,3)
