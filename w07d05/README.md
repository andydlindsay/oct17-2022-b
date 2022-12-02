# W07D05 - Custom Hooks

### To Do
- [x] Custom Hooks
- [x] `useDocumentTitle`
- [x] `useMousePosition` (tests)
- [x] `useInput` (tests)
- [x] `useLocationData`
- [ ] `useRequest`
- [x] `useKeyPress`

### Custom Hook
* is a JS helper function that uses a hook internally
* must start with `use`


```js
// interviewers, appointments, days
const [state, setState] = useState({
  interviewers: {},
  appointments: {},
  days: [],
  day: 'Monday'
});

setState({
  ...state,
  interviewers
})

setState((prev) => {
  return {
    ...prev,
    interviewers
  }
});

['EMPTY', 'CREATE', 'SHOW']
['EMPTY', 'SHOW']


```










