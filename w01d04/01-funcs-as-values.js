// function declaration
// function sayHello (name) {
  //   console.log(`hello there ${name}`);
// }

// function expression
const sayHello = function (name) {
  console.log(`hello there ${name}`);
};

// const funcs = [console.log, 42];

// funcs.push(sayHello);

// // console.log(funcs);

// for (const func of funcs) {
//   func('alice'); // 42('alice');
// }

// const myFunc = funcs[0];
// myFunc('dean');

// funcs[0]('dean');
  
// sayHello('alice');
// sayHello('bob');

// const anotherVar = sayHello;
// const anotherVar2 = sayHello();

// anotherVar('carol')

// sayHello.secretMessage = 'hi there';

// console.log(sayHello);

const obj = {a: 1, b: 2};

for (const key of obj) {}
