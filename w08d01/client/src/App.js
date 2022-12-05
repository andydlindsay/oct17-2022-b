import './App.css';
// import TodoListItem from './components/TodoListItem';
import TodoList from './components/TodoList';
import axios from 'axios';
import {useEffect, useState} from 'react';

const App = () => {
  const [todos, setTodos] = useState([]); 

  useEffect(() => {
    axios.get('/todos')
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h2>Welcome to our website</h2>
      {/* <TodoListItem completed={todo.completed} id={todo.id} task={todo.task}/> */}
      {/* <TodoListItem {...todo} /> */}
      <TodoList todos={todos}/>
    </div>
  );
};

export default App;
