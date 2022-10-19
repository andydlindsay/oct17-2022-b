// const names = ['Alice', 'Bob', 'Carol'];

// for..of, for..in, c-style loop

// for..of gives us back the element on each iteration of the loop
// for (const name of names) {
//   console.log(name);
// }

// for..in gives us back the index on each iteration
// for (const index in names) {
//   console.log(index);
//   const value = names[index];
//   console.log('value', value);
// }

const dog = {
  name: 'Dioji',
  toys: ['bouncy ball', 'chew toy'],
  bff: {
    name: 'Clifford',
    toys: []
  }
};

dog.bff.toys

// console.log(dog.toys);

// for (const toy of dog.toys) {
//   console.log(toy);
// }

// for..in gives us back the key on each iteration
// for (const key in dog) {
//   console.log('key', key);
//   const value = dog[key];

//   if (value is an array) {
//     // loop through the subarray
//   } else {
//     console.log('value', value);
//   }
// }

// const targetValue = 'Dioji';

// for (const key in dog) {
//   console.log('key', key);
//   const value = dog[key];

//   if (value === targetValue) {
//     return key;
//   }

//   console.log('value', value);
// }

for (const key in dog) {
  console.log('key', key);
  const value = dog[key];

  console.log('value', value);
}
