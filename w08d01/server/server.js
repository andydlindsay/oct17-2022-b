const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// in-memory todos
const todos = [
  {
    id: 'abc',
    task: 'do laundry',
    completed: false
  },
  {
    id: 'def',
    task: 'go to costco',
    completed: true
  },
];

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('../client/build'));

// routes

// GET /todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST /todos
app.post('/todos', (req, res) => {
  // console.log(req.body);
  const task = req.body.task;
  const id = Math.random().toString(36).substring(2, 5);
  const completed = false;

  const newTodo = {
    task,
    completed,
    id: id,
  };

  todos.push(newTodo);
  // console.log('todos', todos);

  res.json(newTodo);
});

// PATCH /todos/:id
app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;

  // find the appropriate todo
  const foundTodo = todos.find((todo) => todo.id === id);

  console.log(foundTodo);

  // foundTodo.completed = true;
  foundTodo.completed = !foundTodo.completed;

  res.status(204).send();
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
