import './TodoListItem.scss';

const TodoListItem = (props) => {
  console.log(props);

  return (
    <div className="task">
      <h3 className="task-title">Task: {props.task}</h3>
      <h3>Completed? { props.completed ? '✅' : '⬛' }</h3>
    </div>
  );
};

export default TodoListItem;
