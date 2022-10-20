const sayHello = function (name, callback) {
  console.log(`hello there ${name}`);

  callback();
};

const runMyFunc = function (callback) {
  // console.log(callback.toString());
  callback('elise'); // equivalent to sayHello('elise')
};

runMyFunc(sayHello);
// runMyFunc(console.log);
