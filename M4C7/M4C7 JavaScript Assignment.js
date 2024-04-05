/*
Cree una función JS que acepte 4 argumentos.
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!".
Si es más pequeño, la consola registra "¡El número es menor que 50!"
*/

function sumaMultiplicacion (arg1, arg2, arg3, arg4) {
    if (arguments.length !== 4) {
        throw new Error('Es necesario utilizar 4 argumentos en esta función')
      } else {
        if (typeof arg1 !== 'number' ||
            typeof arg2 !== 'number' ||
            typeof arg3 !== 'number' ||
            typeof arg4 !== 'number') {
            throw new Error('Esta función solo admite números')
        } else {
            result = (arg1 + arg2) * (arg3 + arg4)
            if (result > 50) {
                console.log('¡El número es mayor que 50!')
            }
            else if (result < 50) {
                console.log('¡El número es menor que 50!')
            }
            else if (result === 50) {
                console.log('¡El número es 50!')
            }
            else {
                throw new Error('Se ha producido un error'); 
            }
        }
    }
}