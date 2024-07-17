const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function seleccionarEnemigoMasCercano() {
  let enemy1Nombre, enemy2Nombre;
  let enemy1Distancia, enemy2Distancia;

  rl.question('enemy1: ', (nombre1) => {
    enemy1Nombre = nombre1;
    rl.question('dist1: ', (distancia1) => {
      enemy1Distancia = parseInt(distancia1);

      rl.question('enemy2: ', (nombre2) => {
        enemy2Nombre = nombre2;
        rl.question('dist2: ', (distancia2) => {
          enemy2Distancia = parseInt(distancia2);

          if (enemy1Distancia < enemy2Distancia) {
            console.log(enemy1Nombre);
          } else if (enemy2Distancia < enemy1Distancia) {
            console.log(enemy2Nombre);
          } else {
            console.log(enemy1Nombre);
          }

          rl.close();
        });
      });
    });
  });
}

seleccionarEnemigoMasCercano();
