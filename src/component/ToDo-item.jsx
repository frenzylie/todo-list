function TodoItem({ task, deleteTask, toggleCompleted }) {

    function handleChange() {
     toggleCompleted(task.id);
     }
     
     return (
     <div className="todo-item">
     <input className="checkbox"
     type="checkbox"
     checked={task.completed}
     onChange={handleChange}
     />
    <p>{task.text}</p>
    <button onClick={() => deleteTask(task.id)}>
    <i class="fa fa-trash-o"></i>
     </button>
     </div>
     );
    }

export default TodoItem;

    