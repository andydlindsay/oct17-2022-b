// name, params, return value
const sayHello = (name: string, age?: number): string => {
  return `hello there ${name}`;
};

const returnVal = sayHello('bob');
console.log(returnVal);

const returningPromise = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(num);
  });
};

returningPromise(42).then((num) => {});

const higherOrderFunc = (cb: (name: string) => string): void => {
  cb('1');
};

higherOrderFunc((name: string) => { return 'hello' });
