const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function determinarEnemigoMasCercano() {
  let enemy1Nombre, enemy2Nombre;
  let enemy1Distancia, enemy2Distancia;

  rl.question('Ingrese el nombre del primer enemigo: ', (nombre1) => {
    enemy1Nombre = nombre1;
    rl.question('Ingrese la distancia del primer enemigo: ', (distancia1) => {
      enemy1Distancia = parseFloat(distancia1);

      rl.question('Ingrese el nombre del segundo enemigo: ', (nombre2) => {
        enemy2Nombre = nombre2;
        rl.question('Ingrese la distancia del segundo enemigo: ', (distancia2) => {
          enemy2Distancia = parseFloat(distancia2);

          
          if (enemy1Distancia < enemy2Distancia) {
            console.log(`El enemigo más cercano es ${enemy1Nombre}`);
          } else if (enemy2Distancia < enemy1Distancia) {
            console.log(`El enemigo más cercano es ${enemy2Nombre}`);
          } else {
            console.log(`Ambos enemigos están a la misma distancia.`);
          }

          rl.close();
        });
      });
    });
  });
}

determinarEnemigoMasCercano();
