const colours = ['orange', 'green', 'purple'];

// for (const colour of colours) {
//   console.log(`${colour} is my least favourite colour`);
// }

const doOnEveryIteration = (colour) => {
  console.log(`${colour} is my least favourite colour`);
};

// inversion of control
const loopThroughArray = (arr, callback) => {
  for (const element of arr) {
    // here is where the specific stuff happens
    callback(element);
  }
};

loopThroughArray(colours, doOnEveryIteration);
// loopThroughArray(['alice', 'bob', 'carol'], doOnEveryIteration);
console.log();

colours.forEach(doOnEveryIteration);
