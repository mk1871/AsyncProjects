// Asynchronous programing

const showMessage = (callback) => {
  console.log(callback);
};

const firstMessage = (callback) => {
  console.log("Hello");
  callback();
};

const secondMessage = (callback) => {
  console.log("World");
  callback();
};

firstMessage(secondMessage);
