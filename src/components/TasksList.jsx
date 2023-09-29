

const TasksList = ({removeTask,tasks}) => {
  return (
    <div>
        {tasks.map((task)=>(
            <li key={task.id} className="task-item">
                <span className="task-text">{task.text}</span>
                <button className="remove-button" onClick={()=>removeTask(task.id)}>Remover</button>
            </li>
        ))}
    </div>
  )
}

export default TasksList