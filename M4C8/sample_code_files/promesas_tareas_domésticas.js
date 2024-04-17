const lavadoraPuesta = true;
const panComprado = true;
const comidaPreparada = true;

function ponerLavadora () {
  return new Promise(function(resolve, reject) {
  if (lavadoraPuesta === true) {
    resolve('¡Ropa lavada!');
  } else {
    reject('No has lavado la ropa...');
  }
})
};

function comprarPan () {
  return new Promise(function(resolve, reject) {
  if (panComprado === true) {
    resolve('¡Pan comprado!');
  } else {
    reject('No has comprado el pan...');
  }
})
};

function prepararComida () {
  return new Promise(function(resolve, reject) {
  if (comidaPreparada === true) {
    resolve('¡Comida hecha!');
  } else {
    reject('No has preparado la comida...');
  }
})
};
ponerLavadora().then(resultado => {console.log(resultado); return comprarPan()})
               .then(resultado => {console.log(resultado); return prepararComida()})
               .then(resultado => {console.log(resultado); console.log('¡Has completado todas las tareas!')})
               .catch(error => {console.error(error)})