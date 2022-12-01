# W07D04 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Rules for Hooks
1. have to be called within a React component or React function (custom hook)
2. Must be called top-level and in the same order on every render
3. all hooks have to start with `use`

### Pure Function
* has no side effects
* returns a predictable value based on input

### Side Effects
* interacting with something outside our function or code
* common side effects:
  * writing to stdout
  * modifying the DOM directly
  * establishing a socket connection
  * retrieve data from an API
  * setting timers/intervals

```js
let numToAdd = 5;
let name = null;

const addTwo = (num) => {
  name = 'Alice';
  // console.log(num);
  return num + numToAdd;
};
```

```js
useEffect(() => {}); // called on every render
useEffect(() => {}, [count]); // only be called if something changes in the array
useEffect(() => {}, []); // will only be called on initial render
```













