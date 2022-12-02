const obj = {
  name: 'alice',
  age: 42,
};

console.log(obj);

// const copy = obj;

const copy2 = {
  ...obj,
  name: 'bob',
};

// copy2.name = 'Bob';