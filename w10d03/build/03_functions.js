"use strict";
// name, params, return value
const sayHello = (name, age) => {
    return `hello there ${name}`;
};
const returnVal = sayHello('bob');
console.log(returnVal);
const returningPromise = (num) => {
    return new Promise((resolve) => {
        resolve(num);
    });
};
returningPromise(42).then((num) => { });
const higherOrderFunc = (cb) => {
    cb('1');
};
higherOrderFunc((name) => { return 'hello'; });
