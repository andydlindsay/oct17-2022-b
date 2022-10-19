// collection of key/value pairs
// having data and behaviour (functions)

// arrow functions DO NOT create `this`

const dog = {
  name: 'Dioji',
  toys: ['bouncy ball', 'chew toy'],

  addAToy: function(toyName) {
    // dog.toys.push(toyName);
    this.toys.push(toyName);
  },
  sayMyName: function() {
    // console.log(`hello! my name is ${dog.name}`);
    console.log(`hello! my name is ${this.name}`);
  }
};

let copy = dog;
dog = null;

copy.sayMyName(); // inside sayMyName; `this` points to `copy`

// copy.toys.push('milk bone');
copy.addAToy('squeaky toy');

console.log('copy.toys', copy.toys);
