// -Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = [“velma”, “exploradora”, “jane”, “john”, “harry”]
miLista = ["velma", "exploradora", "jane", "john", "harry"];
for (i = 0; i < miLista.length; i++) {
    console.log(miLista[i]);
}

// -Cree un bucle while que recorra la misma lista y también imprima los nombres.
// Nota: Recuerda crear un contador para que el ciclo no sea infinito.
contador = 0
while (contador < miLista.length) {
    console.log(miLista[contador]);
    contador += 1;
}

// -Cree una función de flecha que devuelva "Hola mundo".

const miFuncion = () => {console.log('Hola mundo');}

miFuncion();
