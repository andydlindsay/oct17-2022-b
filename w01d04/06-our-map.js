// forEach - calls a callback on each element of an array
// filter - takes in array and returns a smaller array
// reduce - takes in an array and "reduces" down to a single value
// map - takes in an array and returns an array the same size with the elements altered

const names = ['alice', 'bob', 'carol'];

const ourMap = (arr, callback) => {
  // create the output array
  const output = [];

  // loop through the provided arr
  for (const element of arr) {
    // call the provided callback with the element of the array AND store the return value
    const returnVal = callback(element);

    // take the return value and add it to the array we're building
    output.push(returnVal);
  }

  // return the array
  return output;
};

const mappedNames = ourMap(names, (name) => {
  return `<p>Name: ${name}</p>`;
});

console.log(names);
console.log(mappedNames);
