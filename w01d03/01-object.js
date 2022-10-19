const student = 'Alice';
const cohort = 'Oct 17 2022';
const grade = 87;

// data structures: arrays
// const studentOne = ['Alice', 'Oct 17 2022', 87, true];

// objects are a collection of key/value pairs; hash, dictionary, associative arrays

// const arr = ['a', 'b'];
// console.log(arr);

// arr[0] = 'a'; // ['a']
// console.log(arr);

const studentOne = {
  isLoggedIn: true,
  cohort: 'Oct 17 2022',
  name: 'Carol'
};

// console.log(studentOne);

// studentOne['name'] = 'Alice';

studentOne.name = 'Alice';
studentOne.name = 'Bob';

// function whatever() {
//   const studentOne = {};
// }

let a = 5;
a = 2;

console.log(studentOne);

// if you know what the key is called, use dot notation
// if the key is a variable of some kind, use square bracket

// const key = 'cohort';

// // square bracket notation: will work 100% of the time
// console.log('cohort', studentOne[key]);

// // dot notation: has some limitations
// console.log('cohort', studentOne.key);


// users['Alice']['friends'].push('Bob');
// users.Alice.friends.push('Bob');
