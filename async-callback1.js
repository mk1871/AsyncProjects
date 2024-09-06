// Synchronous prograaming

function task1(callback) {
  setTimeout(() => {
    console.log(
      "Paso 1: Reúne ingredientes: harina, azúcar, mantequilla, cacao, huevos, chocolate."
    );
    callback();
  }, 1000);
}
function task2(callback) {
  setTimeout(() => {
    console.log(
      "Paso 2: Precalienta el horno a 180°C (350°F) y engrasa el molde."
    );
    callback();
  }, 2000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("Paso 3: Derrite mantequilla y parte del chocolate juntos.");
    callback();
  }, 1500);
}
function task4(callback) {
  setTimeout(() => {
    console.log("Paso 4: Mezcla harina, cacao y azúcar en un bol.");
    callback();
  }, 3000);
}
function task5(callback) {
  setTimeout(() => {
    console.log(
      "Paso 5: Agrega los secos a la mezcla de chocolate y mezcla bien."
    );
    callback();
  }, 4000);
}
function task6(callback) {
  setTimeout(() => {
    console.log("Paso 6: Agrega los huevos a la masa y mezcla bien.");
    callback();
  }, 3500);
}
function task7(callback) {
  setTimeout(() => {
    console.log(
      "Paso 7: Corta el chocolate para relleno y distribúyelo en la masa."
    );
    callback();
  }, 1800);
}
function task8(callback) {
  setTimeout(() => {
    console.log("Paso 8: Hornea 20-25 minutos. Enfriar antes de cortar.");
    callback();
  }, 500);
}
function task9(callback) {
  setTimeout(() => {
    console.log("¡Listo para disfrutar tus brownies rellenos con chocolate!");
    callback();
  }, 700);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          task6(() => {
            task7(() => {
              task8(() => {
                task9(() => {});
              });
            });
          });
        });
      });
    });
  });
});
