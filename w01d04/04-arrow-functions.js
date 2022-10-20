// benefits of arrow functions
// 1. no function keyword!!!
// 2. if only a single argument, no parens needed
// 3. if only one line of code, no curly braces needed
// 4. if no curly braces, the line of code will be implicitly returned
// 5. doesn't create the variable `this`

const sayHello1 = function() { console.log(this) }

const sayHello2 = name => `hello there ${name}`;

const returnVal = sayHello2('alice');
console.log(returnVal);


runMyFunc(function (name) {
  console.log(`hello there ${name}`);
});

runMyFunc(name => console.log(`hello there ${name}`));
