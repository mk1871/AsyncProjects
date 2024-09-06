/* const promise = new Promise((resolve, reject) => {
  const allWentWell = false;

  if (allWentWell) {
    resolve("Todo salió bien.");
  } else {
    reject("¡Uy! Todo salió mal.");
  }
}); */

/* const promise2 = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10);

  setTimeout(() => {
    if (randomNumber < 4) {
      resolve("¡Bien hecho! ¡Adivinaste!");
    } else {
      reject("¡Mala suerte! ¡No adivinaste!");
    }
  }, 2000);
});
 */

/* const promiseOne = new Promise((resolve, reject) => {
  resolve("¡Bien hecho! Promesa 1 resuelta");
});

const promiseTwo = new Promise((resolve, reject) => {
  resolve("¡Bien hecho! Promesa 2 resuelta");
});

const promiseThree = new Promise((resolve, reject) => {
  reject("Promesa 3 rechazada. Mala suerte");
});

promiseOne
  .then((value) => {
    console.log(value);
    return promiseTwo;
  })

  .then((value) => {
    console.log(value);
    return promiseThree;
  })

  .catch((error) => {
    console.log(error);
  });

 */

// Promises
/* const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa Uno resuelta");
  }, 2000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promesa Dos Rejected");
  }, 1500);
});

Promise.all([promiseOne, promiseTwo])
  .then((data) => console.log(data[0], data[1]))
  .catch((error) => console.log(error));
 */

//
//
// Promises / Async - Await

const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const preHeatOven = false;

      if (preHeatOven) {
        resolve("Preheat Oven to 180deg");
      } else {
        reject("Failed task One");
      }
    }, 1000);
  });
};

const addSugarAndChocochips = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addchoco = true;

      if (addchoco) {
        resolve(
          "Place butter and chocolate chip, stir until melted and smooth"
        );
      } else {
        reject("Failed task");
      }
    }, 1000);
  });
};

const addFlourCocoaAndSalt = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addSaltFlour = true;

      if (addSaltFlour) {
        resolve("Add flour, cocoa, salt and stir until smooth");
      } else {
        reject("Failed task");
      }
    }, 1000);
  });
};

const bakeMixture = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bakeMixture = true;

      if (bakeMixture) {
        resolve("Bake for 24 minutes for gooey center");
      } else {
        reject("Failed task");
      }
    }, 1000);
  });
};

const bakeChocolateBrownies = async () => {
  try {
    const taskOne = await preHeatOven();
    console.log(taskOne);

    const taskTwo = await addSugarAndChocochips();
    console.log(taskTwo);

    const taskThree = await addFlourCocoaAndSalt();
    console.log(taskThree);

    const taskFour = await bakeMixture();
    console.log(taskFour);

    console.log("Enjoy your perfect chocolate brownies");
  } catch (error) {
    console.log(error);
  }
};

bakeChocolateBrownies();
