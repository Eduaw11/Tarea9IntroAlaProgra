function determinarEnemigoMasCercano() {
    let enemy1Nombre, enemy2Nombre;
    let enemy1Distancia, enemy2Distancia;
  
    while (true) {
      enemy1Nombre = prompt("enemy1:");
      enemy1Distancia = parseInt(prompt("dist1:"));

      enemy2Nombre = prompt("enemy2:");
      enemy2Distancia = parseInt(prompt("dist2:"));
  
      if (enemy1Distancia < enemy2Distancia) {
        console.log(enemy1Nombre);
      } else if (enemy2Distancia < enemy1Distancia) {
        console.log(enemy2Nombre);
      } else {
        console.log(enemy1Nombre); 
      }
    }
  }
  
  determinarEnemigoMasCercano();
  