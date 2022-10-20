const sayHello = function (name, callback) {
  console.log(`hello there ${name}`);

  callback();
};

const runMyFunc = function (callback) {
  // console.log(callback.toString());
  callback('elise');
  console.log('hello');

  if (iShouldCallFunc) {
    sayHello()
  }
};

runMyFunc(sayHello);
// runMyFunc(console.log);
