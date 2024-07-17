function seleccionarEnemigoParaAtacar() {
    let enemy1Nombre, enemy2Nombre;
    let dist1, dist2;
    let priority1, priority2;
  
    while (true) {
      enemy1Nombre = prompt("enemy1:");
      dist1 = parseInt(prompt("dist1:"));
      priority1 = parseInt(prompt("priority1:"));

      enemy2Nombre = prompt("enemy2:");
      dist2 = parseInt(prompt("dist2:"));
      priority2 = parseInt(prompt("priority2:"));
  
      if (priority1 > priority2) {
        console.log(enemy1Nombre);
      } else if (priority2 > priority1) {
        console.log(enemy2Nombre);
      } else {
        if (dist1 < dist2) {
          console.log(enemy1Nombre);
        } else {
          console.log(enemy2Nombre);
        }
      }
    }
  }
  
  seleccionarEnemigoParaAtacar();
  