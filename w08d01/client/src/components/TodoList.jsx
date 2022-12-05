import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const mappedTodos = props.todos.map((todo) => {
    return <TodoListItem key={todo.id} {...todo} />;
  });

  return (
    <div>
      <h2>List of todos</h2>
      { mappedTodos }
    </div>
  );
};

export default TodoList;
