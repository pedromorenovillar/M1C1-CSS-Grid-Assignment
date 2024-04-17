const lavadoraPuesta = false;
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
async function tareasDomésticas () {
  try {
      const ropaLavada = await ponerLavadora();
      console.log(ropaLavada);
      } catch(error) {
        console.log(error)
      }
  
  try {
      const comidaPreparada = await prepararComida();
      console.log(comidaPreparada);
      } catch(error) {
        console.log(error)
      }
  
  try {
      const panComprado = await comprarPan();
      console.log(panComprado);
      } catch(error) {
        console.log(error)
      }  
}
tareasDomésticas();