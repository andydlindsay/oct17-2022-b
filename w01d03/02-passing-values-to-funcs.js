// let a = 5;

// const changeMyNum = function(num) {
//   num = 10;
//   console.log('inside the function', num);
// };

// console.log('a before function call', a);
// changeMyNum(a);
// console.log('a after function call', a);

const user = {
  name: 'Alice'
};  

const changeMyObj = function(obj) {
  // obj = { faveNumber: 42 };

  obj.name = 'Bob';
  console.log('inside the function', obj);
};

console.log('before the function call', user);
changeMyObj(user);
console.log('after the function call', user);
