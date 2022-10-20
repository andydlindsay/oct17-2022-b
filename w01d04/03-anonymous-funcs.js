const sayHello = function (name) {
  console.log(`hello there ${name}`);
};

const runMyFunc = function (callback) {
  callback('elise');
};

runMyFunc(sayHello);

// inline function
runMyFunc(function (name) {
  console.log(`hello there ${name}`);
});
