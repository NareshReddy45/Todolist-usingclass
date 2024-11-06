import './index.css'

const TodoItem = ({todoDetails, deleteTodo}) => {
  const {id, title} = todoDetails

  return (
    <li className="todo-item">
      <p>{title}</p>
      <button type="button" className="button" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
